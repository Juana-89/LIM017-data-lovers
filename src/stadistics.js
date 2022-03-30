import dataBase from './data/ghibli/ghibli.js';
import { computeStats } from './data.js';

// // const dataBase = data.films;

// // function totalPeoplexGener(stdscore){
// //     //const {rt_score, title} = dataBase; //solicitamos la info de la data
// // const chart = new Chart(stdscore, {
// //     type:"bar",
// //     data:{
// //         labels: [1,5,20,50], //dataBase.title.map(item => item.title), //cabecera
// //         datasets:[
// //         {   
// //             label: "Puntuación", //titulo
// //             backgroundColor: "#4DF4FF",
// //             borderColor: "#ff5Ab0",
// //             data: [12,85,85,90] //parseInt(rt_score).map(item => item.rt_score), //cantidad del peliculas
// //         }
// //     ]
// // }
// // })
// // }
// // function renderCharts(){
// // const stadisticsGraphicGener = document.querySelector("#stadistics_graphic_gener").getContext("2d");
// // totalPeoplexGener(stadisticsGraphicGener);
// // }
// // renderCharts()

// const femaleGender = computeStats.gender(dataBase.people, "Male" ) + "%";
// const MaleGender = computeStats.gender(dataBase.people, "Male" ) + "%";

// const sectionComputeGener = document.createElement("section");
// sectionComputeGener.classList.add("section-Compute");

// sectionComputeGener.innerHTML=`
// <p>Mujeres: ${femaleGender}</p>
// <p>Hombres: ${MaleGender}</p>`;

const malePercent = computeStats.people.gender(dataBase.films.people , "Male") + "%";
const femalePercent = computeStats.people.gender(dataBase.films.people, "Female") + "%";

const sectionStadisticPercent = document.createElement("section");
sectionStadisticPercent.classList.add("section_descrip_movie");
sectionStadisticPercent.innerHTML=`<span><b>Masculinos:</b>${malePercent}</span>
<span><b>Masculinos:</b>${femalePercent}</span>`