
const apiKey = 'b1021dcf6ee71eed87479bd158a87d77';
const myLat = '10.23291';
const myLon = '-66.66474';
const units = 'metric'; // Use 'imperial' for Fahrenheit

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=${units}&appid=${apiKey}`;;

const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const icon = document.getElementById('icon');

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // Output the results to the console for testing
            displayWeather(data);

        } else {
            throw Error('Network response was not ok');
        }

    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {


    temperature.textContent = `${data.main.temp} °C`;
    description.textContent = `${data.weather[0].description}`;

    const iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', data.weather[0].description);
}

getWeather();