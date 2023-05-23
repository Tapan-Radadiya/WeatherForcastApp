const submit = document.getElementById("submit")
const cityVal = document.getElementById("cityVal")
const city_name = document.getElementById("city_name")
const weather_condition = document.getElementById("weather_condition")
const temp1 = document.getElementById("temp1")
const temp_status1 = document.getElementById("temp_status1")
const day = document.getElementById("day")
const date = document.getElementById("date")
let full_date;

const day_array = new Array(7)
day_array[0] = "Monday"
day_array[1] = "Tuesday"
day_array[2] = "Wednesday"
day_array[3] = "Thursday"
day_array[4] = "Friday"
day_array[5] = "Saturday"
day_array[6] = "Sunday"

let currentData = new Date();
const getWeatherInfo = async (event) => {
    event.preventDefault()
    let cityval = cityVal.value;
    if (cityval === "") {
        alert("Please Enter City Name")
    }
    else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=e7703be2b184182344935628621e688c&units=metric`
            const data = await fetch(url)
            const jsonData = await data.json()
            const arrData = [jsonData]
            const weather_cond = arrData[0].weather[0].main
            console.log(weather_cond)
            temp1.innerText = arrData[0].main.temp;
            weather_condition.innerText = `${weather_cond}`
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            if (weather_cond == "Clear") {
                temp_status1.innerHTML = "<i class='fas fa-sun fa-beat-fade'></i>"
            }
            else if (weather_cond == "Smoke") {
                temp_status1.innerHTML = "<i class='fas fa-smoke'></i>"
            }
            else if (weather_cond == "Clouds") {
                temp_status1.innerHTML = "<i class='fa fa-cloud fa-beat-fade'></i>"
            }
            else if (weather_cond == "Rain") {
                temp_status1.innerHTML = "<i class='fas fa-cloud-rain fa-beat-fade'></i>"
            }
            else {
                temp_status1.innerText = weather_cond
            }

        } catch (error) {
            alert("Enter City Name Correctly")
        }

    }
}
day.innerText = day_array[currentData.getDay()]
full_date = `${currentData.getDate()}/${currentData.getMonth() + 1}/${currentData.getFullYear()}`
date.innerText = full_date
submit.addEventListener('click', getWeatherInfo)