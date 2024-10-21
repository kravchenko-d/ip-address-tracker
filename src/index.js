const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    // проверка данных
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_cIbBw5cHPNoqugE7p208zyb3y0bH9&ipAddress=${ipInput.value}`)
    .then(response => response.json())
    .then(console.log);
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}