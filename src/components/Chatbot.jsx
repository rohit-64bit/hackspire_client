import React, { useState } from 'react';
import chatbotimg from '../assets/chatbot.gif'; // Ensure this path is correct for your setup

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showBox, setShowBox] = useState(false);
    const [mouseDownTime, setMouseDownTime] = useState(0);

    // Handle mouse down event to detect click duration
    const handleMouseDown = () => {
        setMouseDownTime(Date.now());
    };

    // Toggle chatbox visibility based on click duration
    const handleMouseUp = () => {
        if (Date.now() - mouseDownTime < 200) {
            setShowBox(prevState => !prevState);
        }
    };

    // Send message to the backend and handle response
    async function sendMessage(event) {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/chat", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userInput }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const botMessage = data.response;

            setChatHistory(prevHistory => [
                ...prevHistory,
                { type: 'user', message: userInput },
                { type: 'bot', message: botMessage }
            ]);

            setUserInput('');
        } catch (error) {
            console.error('Error:', error);
            setChatHistory(prevHistory => [
                ...prevHistory,
                { type: 'bot', message: "Sorry, there was an error processing your request." }
            ]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    position: 'fixed',
                    bottom: '10px',
                    right: '10px',
                    height: '20vh',
                    width: '8rem',
                    zIndex: 100,
                }}
            >
                <img
                    src={chatbotimg}
                    alt="Chatbot"
                    style={{
                        position: 'absolute',
                        top: '5px',
                        left: '0px',
                        width: '8rem',
                        height: '8rem',
                        cursor: 'pointer',
                    }}
                    onMouseDown={handleMouseDown}
                />
                {showBox && (
                    <div
                        id="chat-container"
                        style={{
                            position: 'absolute',
                            top: '-20rem',
                            left: '-30rem',
                            width: '20rem',
                            height: '20rem',
                            background: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            borderRadius: '15px',
                            backdropFilter: 'blur(20px)',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            id="chat-history"
                            style={{
                                overflowY: 'auto',
                                height: '15rem',
                                width: '100%',
                                padding: '10px',
                                fontFamily: 'Arial, sans-serif',
                            }}
                        >
                            {chatHistory.map((entry, index) => (
                                <div
                                    key={index}
                                    style={{
                                        margin: '10px 0',
                                        padding: '5px 10px',
                                        borderRadius: '10px',
                                        maxWidth: '100%',
                                        alignSelf: entry.type === 'user' ? 'flex-end' : 'flex-start',
                                        backgroundColor: entry.type === 'user' ? '#8A6FF2' : '#444',
                                        color: '#fff',
                                        wordBreak: 'break-word',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: entry.type === 'user' ? 'flex-end' : 'flex-start',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '0.75rem',
                                            color: 'white',
                                            marginBottom: '0.25rem',
                                            textAlign: entry.type === 'user' ? 'right' : 'left',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {entry.type === 'user' ? 'You' : 'Mr. Flicky'}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '0.9rem',
                                            textAlign: entry.type === 'user' ? 'right' : 'left',
                                        }}
                                    >
                                        {entry.message}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <form id="chat-form" onSubmit={sendMessage} style={{ display: 'flex', width: '100%' }}>
                            <input
                                type="text"
                                id="user-input"
                                placeholder="Enter your message"
                                value={userInput}
                                onChange={e => setUserInput(e.target.value)}
                                style={{
                                    flexGrow: 1,
                                    border: '1px solid #fff',
                                    borderRadius: '5px',
                                    marginRight: '0.5rem',
                                    padding: '0.5rem',
                                    color: '#fff',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    fontFamily: 'Poppins, sans-serif',
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: '#0072D8',
                                    color: 'white',
                                    borderRadius: '5px',
                                    padding: '0.5rem',
                                    cursor: 'pointer',
                                    border: 'none',
                                }}
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}

export default Chatbot;
