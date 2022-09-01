function updateTime(){
    let today = new Date();
    let date =(today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    document.querySelector('date').textContent = date

    let hours = ''
    let minutes = ''
    if(today.getHours() > 12){
        hours = today.getHours() - 12
    }else{
        hours = today.getHours()
    }
    if(today.getMinutes() < 10){
        minutes = '0' + today.getMinutes()
    }else{
        minutes = today.getMinutes()
    }
    if(hours < 10){
        hours='0'+hours
    }
    let time = hours + ":" + minutes
    document.querySelector('time').textContent = time
    setTimeout(() => {
        updateTime()
      }, "1000")
}
updateTime()
