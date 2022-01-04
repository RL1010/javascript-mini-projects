const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const launchDate = document.querySelector('.launch-date')
  const deadline = document.querySelector('.deadline')
  const items = document.querySelectorAll('.deadline-format h4')
  
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear()
  let tempMonth = tempDate.getMonth()
  let tempDay = tempDate.getDate()
  
  
  // let futureDate = new Date(2021, 11, 30, 10, 30, 15); // year, month 0 index, day, hours,minutes,seconds
  
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 13, 30, 0)
  
  
  const year = futureDate.getFullYear();
  const date = futureDate.getDate()
  const month = months[futureDate.getMonth()]
  const weekday = weekdays[futureDate.getDay()]
  const hour = futureDate.getHours()
  const minutes = futureDate.getMinutes()
  
  launchDate.textContent = `${weekday}, ${date} ${month} ${year} at ${hour}:${minutes}`
  
  
  const futureTime = futureDate.getTime();
  
  function getRemainingTime() {
  
    const todayTime = new Date().getTime();
    const t = futureTime - todayTime
    // calculate all values
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
  
    let days = Math.floor(t / oneDay)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)
  
    // set values array
    const values = [days, hours, minutes, seconds]
  
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`)
      }
      return item
    }
    items.forEach((item, index) => {
      // console.log(values[index]);
      item.innerHTML = format(values[index])
  
    })
  
    if (t < 0) {
      clearInterval(countdown)
      deadline.innerHTML = `<h4 class="epired">The Launch has started</h4>`
    }
  }
  
  // countdown
  let countdown = setInterval(getRemainingTime, 1000)
  