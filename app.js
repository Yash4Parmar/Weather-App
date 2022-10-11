let result = document.getElementById("result");
let inpCityName = document.getElementById("inp-city")
let searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", () => {
    let city = inpCityName.value;
    console.log(city);
    getWeatherdata(city);
})

inpCityName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
});


function getWeatherdata(city) {

    let cityValue = inpCityName.value;
    if (cityValue.length === 0) {
        result.innerHTML = `<h3>Please enter city name!</h3>`
    } else {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        // console.log(url);

        fetch(url).then(Response => Response.json()).then((data) => {
            console.log(data);
            result.innerHTML = `
        <h3 class="city-name" id="city-name">${data.name}</h3>
        <p class="weather">${data.weather[0].main}</p>
        <p class="weather-level">${data.weather[0].description}</p>
        <p class="temp">${data.main.temp} &#8457;</p>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="perticuler image" class="img">
        <p class="min">min ${data.main.temp_min} &#8457;</p>
        <p class="max">max ${data.main.temp_max} &#8457;</p>`
        }).catch(() => {
            result.innerHTML = `
        <h3 >Sorry Coudln't find city!!</h3>
        `
        })
    }

}
