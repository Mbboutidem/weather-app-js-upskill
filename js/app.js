const api = {
    key: "1ce201f877dd913cc6d48374b508a4b2",
    baseurl: "http://api.openweathermap.org/data/2.5/",
};

 const searchbox = document.querySelector('.search-box');
 searchbox.addEventListener('keypress', setQuery);

 function setQuery(evt){
     if(evt.keyCode === 13)
     {
         getResults(searchbox.value);
         console.log(searchbox)
     }
 }

 function getResults(query){
     fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`).then
     (data => {
         return data.json();
     }).then(displayResults);
 }

 function displayResults(data) {
     console.log(data);
     let city = document.querySelector('.location .city');
     city.innerText = `${data.name}, ${data.sys.country}`;

     let now = new Date();
     let date = document.querySelector('.location .date');
     date.innerText = dateBuilder(now);
     //
     let temp = document.querySelector('.current .temp');
     temp.innerHTML = `${Math.round(data.main.temp).toFixed(1)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = data.weather[0].main;

    let lowTemp = document.querySelector('.hi-low');
    lowTemp.innerText = `${Math.round(data.main.temp_min)}°c ~ ${Math.round(data.main.temp_max)}°c`;

 }

 function dateBuilder(d){
     let months = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
 }





// window.addEventListener('load', ()=> {
//     //coordinates
//     let long;
//     let lat;
//     let temperatureDescription = document.querySelector('.temperature-describtion');
//     let temperatureDegree = document.querySelector('.temperature-degree');

//     //http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}
//     //api key = 1ce201f877dd913cc6d48374b508a4b2
//     //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=
//     //1ce201f877dd913cc6d48374b508a4b2
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(position => {
//             console.log(position)
//             long = position.coords.longitude;
//             lat = position.coords.latitude;
//             const api = `https://api.darksky.net/forecast/fd9d9c6418c23d94745b866767721ad1/${lat},${long}`
//             fetch(api).then(data => {
//                 //conver it to json
//                 return data.json();
//             }).then(data => {
//                 console.log(data);
//                 const {temperature, summary} = data.currently;
//                 data.currently.temperature;
//             })
            
//         });

//     }else {
//         h1.textContent = "Sorry this is not supported in your region"
//     }
// });