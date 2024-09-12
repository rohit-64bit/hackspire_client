import React, { useState, useCallback, useEffect } from 'react'
import { Button } from '@nextui-org/react'
import { BsCameraVideoFill, BsFillCameraVideoOffFill, BsMicFill, BsMicMuteFill, BsPersonLinesFill, BsChatFill, BsSendFill } from "react-icons/bs";
import { ImPhoneHangUp } from "react-icons/im";
import ReactPlayer from 'react-player'
import { useSocket } from './../../contexts/SocketProvider';
import peer from '../../services/Peer';

const Room = () => {

    const socket = useSocket();

    // control states
    const [videoStatus, setVideoStatus] = useState(false)
    const [audioStatus, setAudioStatus] = useState(false)

    const [chatStatus, setChatStatus] = useState(false)
    const [personListStatus, setPersonListStatus] = useState(false)

    // socket states
    const [remoteSocketId, setRemoteSocketId] = useState(null);
    const [myStream, setMyStream] = useState();
    const [remoteStreams, setRemoteStreams] = useState([]);

    const toogleVideo = () => {
        setVideoStatus(!videoStatus)
    }

    const toogleAudio = () => {
        setAudioStatus(!audioStatus)
    }

    const toogleChat = () => {
        if (personListStatus) {
            setPersonListStatus(!personListStatus)
        }
        setChatStatus(!chatStatus)
    }

    const tooglePersonList = () => {
        if (chatStatus) {
            setChatStatus(!chatStatus)
        }
        setPersonListStatus(!personListStatus)
    }

    const handleUserJoined = useCallback(({ email, id }) => {
        console.log(`Email ${email} joined room`);
        setRemoteSocketId(id);
    }, []);

    const handleCallUser = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        const offer = await peer.getOffer();
        socket.emit("user:call", { to: remoteSocketId, offer });
        setMyStream(stream);
    }, [remoteSocketId, socket]);

    const handleIncommingCall = useCallback(
        async ({ from, offer }) => {
            setRemoteSocketId(from);
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true,
            });
            setMyStream(stream);
            console.log('Incoming Call', from, offer);
            const ans = await peer.getAnswer(offer);
            socket.emit("call:accepted", { to: from, ans });
        },
        [socket]
    );

    const sendStreams = useCallback(() => {
        for (const track of myStream.getTracks()) {
            peer.peer.addTrack(track, myStream);
        }
    }, [myStream]);

    const handleCallAccepted = useCallback(
        ({ from, ans }) => {
            peer.setLocalDescription(ans);
            console.log("Call Accepted!");
            sendStreams();
        },
        [sendStreams]
    );

    const handleNegoNeeded = useCallback(async () => {
        const offer = await peer.getOffer();
        socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
    }, [remoteSocketId, socket]);

    useEffect(() => {
        peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
        return () => {
            peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
        };
    }, [handleNegoNeeded]);

    const handleNegoNeedIncomming = useCallback(
        async ({ from, offer }) => {
            const ans = await peer.getAnswer(offer);
            socket.emit("peer:nego:done", { to: from, ans });
        },
        [socket]
    );

    const handleNegoNeedFinal = useCallback(async ({ ans }) => {
        await peer.setLocalDescription(ans);
    }, []);

    useEffect(() => {
        peer.peer.addEventListener("track", (ev) => {
            const remoteStream = ev.streams[0]; // Get the remote stream
            setRemoteStreams((prevStreams) => {
                // Prevent duplicates
                if (!prevStreams.find(stream => stream.id === remoteStream.id)) {
                    return [...prevStreams, remoteStream]; // Add the new remote stream
                }
                return prevStreams;
            });
        });
    }, []);

    useEffect(() => {
        socket.on("user:joined", handleUserJoined);
        socket.on("incomming:call", handleIncommingCall);
        socket.on("call:accepted", handleCallAccepted);
        socket.on("peer:nego:needed", handleNegoNeedIncomming);
        socket.on("peer:nego:final", handleNegoNeedFinal);

        return () => {
            socket.off("user:joined", handleUserJoined);
            socket.off("incomming:call", handleIncommingCall);
            socket.off("call:accepted", handleCallAccepted);
            socket.off("peer:nego:needed", handleNegoNeedIncomming);
            socket.off("peer:nego:final", handleNegoNeedFinal);
        };
    }, [
        socket,
        handleUserJoined,
        handleIncommingCall,
        handleCallAccepted,
        handleNegoNeedIncomming,
        handleNegoNeedFinal,
    ]);

    useEffect(() => {
        handleCallUser();
    }, [
        videoStatus, audioStatus
    ])

    return (
        <>
            <div className='h-screen flex gap-5 p-5'>

                <div className={personListStatus || chatStatus ? 'w-[75%] flex flex-col gap-5' : 'w-full flex flex-col gap-5'}>

                    {/* video sections */}
                    <div className='bg-white h-[90%] card-shadow rounded-xl'>

                        <ReactPlayer
                            url={myStream} // video stream
                            muted
                            playing
                            controls={false}
                            height='100%'
                            width='100%'
                            className='scale-x-[-1]'
                        />

                        {
                            remoteStreams.map((stream, index) => {
                                return (
                                    <ReactPlayer
                                        key={index}
                                        url={stream} // video stream
                                        muted
                                        playing
                                        controls={false}
                                        height='100%'
                                        width='100%'
                                    />
                                )
                            })
                        }

                    </div>

                    {/* controls */}
                    <div className='h-[10%] bg-white card-shadow rounded-xl flex justify-center items-center gap-5'>

                        <Button className={videoStatus ? 'bg-slate-600 py-2 px-5 rounded-lg duration-300' : 'bg-slate-400 py-2 px-5 rounded-lg duration-300'} onClick={toogleVideo}>
                            {
                                !videoStatus ? <BsFillCameraVideoOffFill className='text-white text-xl' /> : <BsCameraVideoFill className='text-white text-xl' />
                            }
                        </Button>

                        <Button className={audioStatus ? 'bg-slate-600 py-2 px-5 rounded-lg duration-300' : 'bg-slate-400 py-2 px-5 rounded-lg duration-300'} onClick={toogleAudio}>
                            {
                                !audioStatus ? <BsMicMuteFill className='text-white text-xl' /> : <BsMicFill className='text-white text-xl' />
                            }
                        </Button>

                        <Button className='bg-red-600 py-2 px-5 rounded-lg duration-300'>
                            <ImPhoneHangUp className='text-white text-xl' />
                        </Button>

                        <div className='outline outline-1 rounded-full outline-slate-300  h-1/2 '></div>

                        <Button onClick={tooglePersonList}
                            className={personListStatus ? 'bg-slate-600 py-2 px-5 rounded-lg duration-300' : 'bg-slate-400 py-2 px-5 rounded-lg duration-300'}
                        >
                            <BsPersonLinesFill className='text-white text-xl' />
                        </Button>

                        <Button onClick={toogleChat}
                            className={chatStatus ? 'bg-slate-600 py-2 px-5 rounded-lg duration-300' : 'bg-slate-400 py-2 px-5 rounded-lg duration-300'}
                        >
                            <BsChatFill className='text-white text-xl' />
                        </Button>

                    </div>

                </div>

                <div className={personListStatus || chatStatus ? 'w-[25%] h-full bg-white card-shadow rounded-xl p-5' : 'w-[0%] h-full bg-white card-shadow rounded-xl p-0 hidden'}>

                    {/* chat list */}
                    {
                        chatStatus &&
                        <div className='h-full bg-white flex flex-col'>

                            <div className='h-full flex flex-col'>

                            </div>

                            <form action="" className='w-full flex p-2 outline rounded-lg outline-slate-300'>
                                <input type="text" className='focus:outline-none w-full px-2' placeholder='Type a message ...' />
                                <Button>
                                    <BsSendFill />
                                </Button>
                            </form>

                        </div>
                    }

                    {/* participants list */}
                    {
                        personListStatus &&
                        <div className='h-full bg-white'>

                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Room