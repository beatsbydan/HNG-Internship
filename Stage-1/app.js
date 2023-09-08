// Variables
const dayElement = document.getElementById("currentDay")
let timeElement = document.getElementById("currentTime")

// Function to get the time
const getCurrentTime = () => {
    // New date module to generate the current date
    const currentDate = new Date()
    
    const currentDay = currentDate.toLocaleString('en-us', {  weekday: 'long' })
    dayElement.innerHTML = currentDay
    const currentTime = currentDate.getTime()
    timeElement.innerText = currentTime
    console.log(currentTime)
}
getCurrentTime()
// Getting the milliseconds value every millisecond
setInterval(()=>{
    getCurrentTime()
}, 1)