import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var avgSeasonNumber = document.getElementById('avg-seasons');
renderCoursesInTable(dataSeries);
avgSeasonNumber.innerHTML = "".concat(calculateAvgSeasonsNumber(dataSeries));
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td><a href=\"").concat(serie.review, "\">").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
/**
 * Calcula el promedio de temporadas de las series en la tabla.
 * @param series
 * @returns
 */
function calculateAvgSeasonsNumber(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
