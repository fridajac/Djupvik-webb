import { fetchWeather } from "./fetchWeather.js";
import { getWeatherString } from "./getWeatherString.js";

const WEATHER_WIDGET_DIV = document.querySelector('#smhi-widget');

main();

async function main() {
    const results = await fetchWeather();
    createWeatherWidget(results);
}

function createWeatherWidget(results) {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const tableToday = createTable(getWeatherDataForDate(today, results), 'Idag');
    WEATHER_WIDGET_DIV.appendChild(tableToday);

    const tableTomorrow = createTable(getWeatherDataForDate(tomorrow, results), 'Imorgon');
    WEATHER_WIDGET_DIV.appendChild(tableTomorrow);
}

function getWeatherDataForDate(date, results) {
    date.setHours(23, 59, 59, 999);
    const weatherData = results.timeSeries.filter(timeSerie => new Date(timeSerie.validTime) < date);
    const first = weatherData[0];
    const middle = weatherData[Math.round(weatherData.length / 2)];
    const last = weatherData[weatherData.length - 1];
    return [first, middle, last];
}

function createTable(timeSeries, captionText) {
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    caption.innerText = captionText;
    table.appendChild(caption);

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const row = document.createElement('tr');
    thead.appendChild(row);

    const colTime = document.createElement('th');
    colTime.innerText = 'Kl';
    row.appendChild(colTime);

    const colTemp = document.createElement('th');
    colTemp.innerText = '°C';
    row.appendChild(colTemp);

    const colWind = document.createElement('th');
    colWind.innerText = 'Vind';
    row.appendChild(colWind);

    const colSymbol = document.createElement('th');
    colSymbol.innerText = 'Himmel';
    row.appendChild(colSymbol);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    timeSeries.forEach(timeSerie => {
        addTimeSerie(tbody, timeSerie);
    });

    return table;
}

function addTimeSerie(tbody, results) {
    const row = document.createElement('tr');
    tbody.appendChild(row);

    const timeCol = document.createElement('td');
    timeCol.innerText = new Date(results.validTime).getHours() + '.00';
    row.appendChild(timeCol);

    const tempCol = document.createElement('td');
    tempCol.innerText = results.parameters[10].values[0] + ' °C';
    row.appendChild(tempCol);

    const windCol = document.createElement('td');

    const arrowDiv = createArrowDiv();

    const rotateText = 'rotate(' + results.parameters[13].values[0] + 'deg)';
    arrowDiv.style.transform = rotateText;

    const windSpan = document.createElement('span');
    windSpan.innerText = ' (' + results.parameters[14].values[0] + ')';

    windCol.appendChild(arrowDiv);
    windCol.appendChild(windSpan);
    row.appendChild(windCol);

    const symbolCol = document.createElement('td');
    symbolCol.innerText = getWeatherString(results.parameters[18].values[0]);
    row.appendChild(symbolCol);
}

function createArrowDiv() {
    const arrowDiv = document.createElement('div');
    arrowDiv.classList.add('arrow');
    arrowDiv.innerHTML = '↑';
    return arrowDiv;
}