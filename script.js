const apiKey = "0348c3f2d4ae4057b8a171057230407";
let currentCity;
let currentTemperature;

// Element selectors
const button = document.querySelector("#submitButton");

// Event handlers
function getWeather() {
    const input = document.querySelector("#textInput").value;
    
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`)
        .then(function (response) {
            console.log(response);
            currentCity = response.data.location.name;
            currentTemperature = response.data.current.temp_f;
            // Update the DOM
            document.querySelector("#cityName").innerText = `${currentCity}`;
            document.querySelector("#temp").innerText = `${currentTemperature}° F`;
            document.querySelector(".output").style.opacity = 1;
        })
        .catch(function (error) {
            // Error response
            console.log(error);
        });
    };

// Event listeners
button.addEventListener('click', async () => {
    console.log("You clicked the submit button."); 
    getWeather();
});
