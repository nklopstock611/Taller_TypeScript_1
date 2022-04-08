import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonNumber: HTMLElement = document.getElementById('avg-seasons')!;

renderCoursesInTable(dataSeries);

avgSeasonNumber.innerHTML = `${calculateAvgSeasonsNumber(dataSeries)}`

function renderCoursesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td><a href="${serie.review}">${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

/**
 * Calcula el promedio de temporadas de las series en la tabla.
 * @param series
 * @returns 
 */
function calculateAvgSeasonsNumber(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / series.length;
}