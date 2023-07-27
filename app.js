const inputValue = document.querySelector('.inputValue')
const button = document.querySelector('.button')
const name = document.querySelector('.name')
const desc = document.querySelector('.desc')
const temp = document.querySelector('.temp')
const displaycontent = document.querySelector('.display')
const errorMessage = document.querySelector('.err')

const get = async () => {
    try{
        if(inputValue.value === ''){
            errorMessage.textContent = 'Enter a City'
        }else{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=e9c0ab1dfd154039e73edf08ef2c3528&units=metric`)
            if(!res.ok){
                throw new Error('wrong city name')
            }
            const data = await res.json()
            displaycontent.innerHTML = `
            <h1 class="name">${inputValue.value}</h1>
            <p class="desc">Description: ${data.weather[0].description}</p>
            <p class="temp">Temperature: ${Math.floor(data.main.temp)}°C</p>
            <p class="temp">Country: ${data.sys.country}</p>`
            errorMessage.style.display = 'none'
        }
        }catch(err){
            errorMessage.textContent = `${err}`
            errorMessage.style.color = 'red'
        }
}

button.addEventListener('click', get)