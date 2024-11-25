function getThanksgivingDate() {
    const year = new Date().getFullYear();
    const november = new Date(year, 10, 1); 
    const dayOfWeek = november.getDay(); 
  
    const diff = (dayOfWeek <= 4 ? 4 - dayOfWeek : 11 - dayOfWeek);
    const thanksgivingDate = new Date(november.setDate(1 + diff + 21)); // Adding 21 days to get to the 4th Thursday
    
    return thanksgivingDate;
  }
  
  const thanksgivingDate = getThanksgivingDate();
  
  setInterval(function() {
    const now = new Date();
    const timeLeft = thanksgivingDate - now; 
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
  }, 1000);
  