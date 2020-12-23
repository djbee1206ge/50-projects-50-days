const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('clock-dark')) {
        html.classList.remove('clock-dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('clock-dark')
        e.target.innerHTML = 'Light mode'
    }
})





function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const ampm = time.getHours() >= 12 ? 'PM' : 'AM'
    const hrs = time.getHours() % 12
    const min = time.getMinutes()
 
    const hrsRotate = ((hrs*60)+min)/2
    const minRotate = scale(time.getMinutes(), 0, 59, 0, 360)
    const secRotate = Math.floor(scale(time.getSeconds(), 0, 590, 0, 360))
  

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hrsRotate}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minRotate}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secRotate}deg)`
   
    

    timeEl.innerHTML = `${time.getHours() % 12}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()} ${ampm}`
    dateEl.innerHTML = `${days[day]}, <span class="circle">${date}</span> ${months[month]} `


}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


setTime()

setInterval(setTime, 1000)




// hours = seeTime.getHours*3600 + seeTime.getMinutes * 60 + seeTime.getSeconds