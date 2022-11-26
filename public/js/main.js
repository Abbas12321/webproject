const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const datahide = document.getElementById('.middle_layer')

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "") {
        cityName.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units={1b3b2fa5620caff0ebc23e15023f9ea5}`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or cloudy
            if(tempMood == "Clear"){
                temp_status.innerText = "<i class='fa-solid fa-sun'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerText = "<i class='fa-solid fa-cloud'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerText = "<i class='fa-solid fa-cloud-sun-rain'></i>";
            } else{
                temp_status.innerText = "<i class='fa-regular fa-clouds'></i>";
            }
        }catch{
            cityName.innerText = `Plz write the name before search`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);