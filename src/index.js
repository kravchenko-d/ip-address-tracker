import { validateIp } from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const inInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_cIbBw5cHPNoqugE7p208zyb3y0bH9&ipAddress=${ipInput.value}`,
    )
      .then((response) => response.json())
      .then(setInfo);
  }
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

function setInfo(mapData) {
    console.log(mapData);
    inInfo.innerText = mapData.ip;
    locationInfo.innerText = mapData.location.country + ', ' + mapData.location.region;
    timezoneInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
}
