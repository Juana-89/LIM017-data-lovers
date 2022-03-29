import data from './data/ghibli/ghibli.js';
import { sortData, sortMovieRanking, filterMoviexProducer } from './data.js';
const films = data.films;
const mainmovies = document.querySelector("main");


/*función que activa música en botón "Leer más"*/
const audioMusicTotoro = document.querySelector("#button_start");
audioMusicTotoro.addEventListener("click", () => {
    const audioTagTotoro = document.querySelector("#audio-Totoro");
    audioTagTotoro.play();
});

/*función que muestra carteles de películas */
const showInfoMovies = (arrayData) =>{
    mainmovies.innerHTML = "";
    arrayData.forEach((filmsPublished) => {  
        const divFilm = document.createElement("div"); //div para cada tarjeta
        divFilm.classList.add("div_content_movies");
        divFilm.innerHTML=`<img src="${filmsPublished.poster}" class="div_img_movie" /><br>
        <b><h3 class="contenedor_section_h3__movti"><p class="films-titles">${filmsPublished.title}</h3></b></br>
        <span class="span_info_Card"><b>Año publicación: </b>${filmsPublished.release_date}</span></br>
        <span class="span_info_Card"><b>Director: </b>${filmsPublished.director}</span></br>
        <span class="span_info_Card"><b>Producer: </b>${filmsPublished.producer}</span></br>
        <span class="span_info_Card"><b>Score: </b> ${filmsPublished.rt_score}</span> </br>`;
        divFilm.setAttribute("id", filmsPublished.id);
        mainmovies.appendChild(divFilm);

        //creando un identificador para cada card y conectarlo con el id de la película
        const identityMovie = document.getElementById(filmsPublished.id)
        identityMovie.addEventListener("click", newPageInfoMovie);
        function newPageInfoMovie (){
            mainmovies.innerHTML = "";
            //oculta los elementos del divFilms
            document.querySelector(".section_welcome").style.display = "none";
            document.querySelector(".content-text").style.display = "none";
            document.querySelector(".content-biography").style.display = "none";
            document.querySelector(".span_search").style.display = "none";
            document.querySelector(".header").style.position="absolute";

            //colocar en un aside la portada de la película
            const asideInfoMovie = document.createElement("aside");
            asideInfoMovie.classList.add("aside_info_movie");
            asideInfoMovie.innerHTML=`<img src="${filmsPublished.cover}" /><br>`;
            
            //sección de la descripción de la película
            const sectionDescripMovie = document.createElement("section");
            sectionDescripMovie.classList.add("section_descrip_movie");
            sectionDescripMovie.innerHTML=`
            <b><h3 class="div_aside_h3_title">${filmsPublished.title}</h3></b></br>
            <span class="span_descrip_Card"><b>Año publicación: </b>${filmsPublished.release_date}</span></br>
            <span class="span_descrip_Card"><b>Director: </b>${filmsPublished.director}</span></br>
            <span class="span_descrip_Card"><b>Productor: </b>${filmsPublished.producer}</span></br>
            <span class="span_descrip_Card"><b>Score: </b>${filmsPublished.rt_score}</span>
            <span class="span_descrip_Card"><div class="span_descrip_Card1"><b>Sipnosis: </b>${filmsPublished.description}</div></br></br></span></br>`;

            //sección de los personajes
            //se crea un div solo para el título porque de lo contrario repetiría si lo escribes junto al foreach
            const peopleTitleSection = document.createElement("section");
            peopleTitleSection.classList.add("section_title_people");
            peopleTitleSection.innerHTML+=`<b><h2 class= "h2_section_people">Personajes: </h2></b></br>`

            const sectionPeopleMovie = document.createElement("section");
            sectionPeopleMovie.classList.add("section_people_movie"); 

            const peopleMovie = filmsPublished.people;
            peopleMovie.forEach((people) => {  
            sectionPeopleMovie.innerHTML+=`
            <img src="${people.img}" class="div_img_people" /><br>
            <b><h3 class="name_people"><p class="name_people">Nombre: ${people.name}</h3></b></br>
            <span class="span_info_People"><b>Edad: </b>${people.age}</span></br>
            <span class="span_info_People"><b>Sexo: </b>${people.gender}</span></br>
            <span class="span_info_People"><b>Color de ojo: </b>${people.eye_color}</span></br>
            <span class="span_info_People"><b>Color de cabello: </b>${people.hair_color}</span></br>
            <span class="span_info_People"><b>Especie: </b>${people.specie}</span></br>`;

            //sección de los escenarios
            const locationTitleSection = document.createElement("section");
            locationTitleSection.classList.add("section_title_location");
            locationTitleSection.innerHTML+=`<b><h2 class= "h2_section_location">Locaciones: </h2></b></br>`

            const sectionLocationMovie = document.createElement("section");
            sectionLocationMovie.classList.add("section_location_movie"); 

            const locationMovie = filmsPublished.locations;
            locationMovie.forEach((location) => {  
            sectionLocationMovie.innerHTML+=`
            <img src="${location.img}" class="div_img_location" /><br>
            <b><h3 class="name_location"><p class="name_location">Nombre: ${location.name}</h3></b></br>
            <span class="span_info_Location"><b>Cima: </b>${location.climate}</span></br>
            <span class="span_info_Location"><b>Especie: </b>${location.terrain}</span></br>`;

            
            peopleTitleSection.append(sectionPeopleMovie);
            mainmovies.append(asideInfoMovie, sectionDescripMovie, peopleTitleSection );
        })         
   })
    }
})}
 showInfoMovies(films);

// /*Usando el map para buscar el año de publicación*/
const yearMovie = films.map((item) => {return item.release_date});
const moviePremier = yearMovie.filter((item, index) => {
    return yearMovie.indexOf(item) === index;})
///////declaración de variables para que aparezcan las películas dentro de los selects del HTML    
const yearMoviesPublished = document.querySelector("#input_publication0");
for (let i = 0; i < moviePremier.length; i++) {
    let yearMovieTittle = `
    <option value="${moviePremier[i]}">${moviePremier[i]}</option>`
yearMoviesPublished.innerHTML += yearMovieTittle;
}
/*filtro de los años que se crearon las películas*/
const selectYearPublisher = document.querySelector("#input_publication0");
selectYearPublisher.addEventListener("change", () => {
    const filterMoviexYear = films.filter(function (film) {
        //console.log(typeof film.release_date, typeof filterYearPublisher.value, film.release_date, filterYearPublisher.value)
        if (film.release_date === selectYearPublisher.value) {
            return true;
        } else {
            return false;
        }
    })
    showInfoMovies(filterMoviexYear);
});
// //borrando duplicados de la data para que aparezca en los selects
// const noInfoDuplicates = (array) => { 
// const result  = array.filter((item, index) => {
//     return array.indexOf(item) === index;
// });
// return result;};//

// /*Declarando variables para buscar el productor*/

const searchDuplicateProducter = films.map((item) => { return item.producer });
const noDuplicatemovieProducer = searchDuplicateProducter.filter((item, index) => {
    return searchDuplicateProducter.indexOf(item) === index;});

const selectNameProducer = document.querySelector("#input_publication1");
for (let i = 0; i < noDuplicatemovieProducer.length; i++) {
    let nameProducer = `
    <option value="${noDuplicatemovieProducer[i]}">${noDuplicatemovieProducer[i]}</option>`   
    selectNameProducer.innerHTML += nameProducer;
}
/*filtro de los productores de las peliculas para que aparezcan los titles que produjeron*/

selectNameProducer.addEventListener("change", () => {
    showInfoMovies(filterMoviexProducer(films, selectNameProducer.value));
});

/*filtrado ascendente y descendente alfabéticamente*/
const selectSortOrder = document.querySelector("#input_publication2");
selectSortOrder.addEventListener("change", () => {
    showInfoMovies(sortData(films,selectSortOrder.value))
});

/*filtrado ranking por puntaje de películas*/
const selectRankingMovies = document.querySelector("#input_publication3");
selectRankingMovies.addEventListener("change", () => {
    showInfoMovies(sortMovieRanking(films,selectRankingMovies.value))
});
