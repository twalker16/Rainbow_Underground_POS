const docBody = document.querySelector('body')
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
function createWait(){
    let warning = document.createElement('div')
    warning.id='workingIndicator'
    warning.textContent = 'Please Wait...'
    document.querySelector('header').appendChild(warning)
}
function destroyWait(){
    document.querySelector('#workingIndicator').remove()
}
function openOptions(){
    createWait()
    let container = document.createElement('aside')
    container.id='optionsContainer'
    docBody.appendChild(container)
    let exitBtn = document.createElement('Button')
    exitBtn.id='xBtn'
    container.appendChild(exitBtn)
    exitBtn.addEventListener('click', closeOptions)
    destroyWait()
}
function closeOptions(){
    createWait()
    document.querySelector('#optionsContainer').remove()
    destroyWait()
}

document.querySelector('#optionsBtn').addEventListener('click', openOptions)