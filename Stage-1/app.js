const dayElement = document.getElementById("currentDay")
const timeElement = document.getElementById("currentTime")

const currentDate = new Date()
const currentDay = currentDate.toLocaleString('en-us', {  weekday: 'long' })
dayElement.innerHTML = currentDay

const getCurrentTime = () => {
    const currentTime = currentDate.getUTCMilliseconds()
    timeElement.innerHTML = currentTime
}

setInterval(()=>{
    getCurrentTime()
}, 1)