function FormatDateTime(isoString) {
    const date = new Date(isoString);

    // Get weekday
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = weekdays[date.getUTCDay()];

    // Get date (e.g., September 12, 2024)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Get time in 12-hour format
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString();
    const formattedTime = `${formattedHours}:${minutes} ${period}`;

    return `${weekday}, ${formattedTime}, ${formattedDate}`;
}

export default FormatDateTime;