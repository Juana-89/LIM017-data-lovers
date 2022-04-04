import dataBase from './data/ghibli/ghibli.js';
const base = dataBase.films;

/*borrar los índices repetidos en los productores*/
const graphicStatsxDirector = base.map(item => item.director);
const nameNoDuplicate = graphicStatsxDirector.filter((item, index) => {
  return graphicStatsxDirector.indexOf(item) === index;})

/*contabilizar las películas de acuerdo a los nombres*/
const countMoviexDirector = graphicStatsxDirector.reduce((counter, name) => {
  if (counter[name]) {
    counter[name] = counter[name] + 1;
  }else{
    counter[name] = 1;
  }
  return counter;
}, {});

const stadisticsGraphicDirector = document.querySelector("#stadistics_graphic_director").getContext("2d");
function totalMoviexDirector(number){

const chart = new Chart(number, {
  
    type:"bar",
    
    data:{
        labels:nameNoDuplicate, //cabecera
        datasets:[
        {   
            label: "Número películas dirigidas", //leyenda
            backgroundColor: "#f7b773",
            borderColor: "#f7b773",
            hoverBackgroundColor: "#9FB4FF",
            data: countMoviexDirector, //cantidad del peliculas
        }
    ]
}
})
}
totalMoviexDirector(stadisticsGraphicDirector);

/*stats productores*/
const graphicStatsxProductor = base.map(item => item.producer);
const nameNoDuplicateProd = graphicStatsxProductor.filter((item, index) => {
  return graphicStatsxProductor.indexOf(item) === index;})

const countMoviexProductor = graphicStatsxProductor.reduce((counter, name) => {
  if (counter[name]) {
    counter[name] = counter[name] + 1;
  }else{
    counter[name] = 1;
  }
  return counter;
}, {});
console.log(countMoviexProductor)

const stadisticsGraphicProductor = document.querySelector("#stadistics_graphic_productor").getContext("2d");
function totalMoviexProductor(num){

const chart = new Chart(num, {
    type:"line",
    data:{
        labels:nameNoDuplicateProd, //leyenda
        datasets:[
        {   
            label: "Cantidad de películas producidas", //titulo
            backgroundColor: "#99FFCD",
            borderColor: "#9FB4FF",
            data: countMoviexProductor, //cantidad del peliculas
            borderWidth: 5,
        }
    ]
}
})
}
totalMoviexProductor(stadisticsGraphicProductor);


const graphicStats = base
.map(item => item.director)
.reduce((counter, name) => {
  if (counter[name]) {
    counter[name] = counter[name] + 1;
  }else{
    counter[name] = 1;
  }
  return counter;
}, {});
console.log(graphicStats);