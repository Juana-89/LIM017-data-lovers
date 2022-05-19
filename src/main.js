import data from './data/ghibli/ghibli.js';
import { sortData, sortMovieRanking, filterMoviexProducer, filterYearPublished } from './data.js';
const films = data.films;
const mainmovies = document.querySelector("main");

/*función que activa música en botón "Leer más"*/
//const audioMusicTotoro = document.querySelector("#div_audio_totoro");
const imgMusicPlay = document.querySelector("#img_audio");
const imgMusicStop = document.querySelector("#img_audio_stop");
const audioTagTotoro = document.querySelector("#audio-Totoro");

imgMusicPlay.addEventListener("click", () => {
    audioTagTotoro.play();
    imgMusicPlay.style.display = "none";
    imgMusicStop.style.display = "inline";
});
imgMusicStop.addEventListener("click", () => {
    audioTagTotoro.pause();
    imgMusicPlay.style.display = "inline";
    imgMusicStop.style.display = "none";

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
            document.querySelector(".btnBackHome").style.display = "block";
            document.querySelector(".contenido-stadistics").style.display = "none";

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

            //botón regresar a la página inicial
            const btnBackHome = document.querySelector(".btnBackHome");
            btnBackHome.addEventListener("click", backHome);
            function backHome(){
                mainmovies.appendChild(divFilm);
                document.querySelector(".header").style.position = "fixed";
                document.querySelector(".section_welcome").style.display = "block";
                document.querySelector(".content-text").style.display = "flex";
                document.querySelector(".content-biography").style.display = "block";
                document.querySelector(".span_search").style.display = "flex";
                asideInfoMovie.style.display = "none";
                showInfoMovies(films);
            }

            //sección de los personajes
            const sectionPeopleMovie = document.createElement("section");
            sectionPeopleMovie.classList.add("section_people_movie");
            sectionPeopleMovie.innerHTML=`<span class="span_title_people"><b><h2 class="h2_section_people">Personajes:</h2></br></b></span>`;
                    
            const peopleMovie = filmsPublished.people;
            peopleMovie.forEach((people) => {  
            sectionPeopleMovie.innerHTML+=`
            <div class="section_div_people_movie"><img src="${people.img}" class="div_img_people" /><br>
            <div class= "div_info_people"><b><h3 class="name_people"><p class="name_people">Nombre: ${people.name}</h3></b></br>
            <span class="span_info_People"><b>Edad: </b>${people.age}</span></br>
            <span class="span_info_People"><b>Sexo: </b>${people.gender}</span></br>
            <span class="span_info_People"><b>Color de ojo: </b>${people.eye_color}</span></br>
            <span class="span_info_People"><b>Color de cabello: </b>${people.hair_color}</span></br>
            <span class="span_info_People"><b>Especie: </b>${people.specie}</span></div></div></br>`;
            });

            //sección de los escenarios
            const sectionLocationMovie = document.createElement("section");
            sectionLocationMovie.classList.add("section_location_movie");
            sectionLocationMovie.innerHTML=`<span class="span_title_location"><b><h2 class= "h2_section_location">Locaciones:</h2></b></br></span>`

            const locationMovie = filmsPublished.locations;
            locationMovie.forEach((location) => {  
            sectionLocationMovie.innerHTML+=`
            <div class="section_div_location_movie"><img src="${location.img}" class="div_img_location" /><br>
            <div class= "div_info_location"><b><h3 class="name_location"><p class="name_location">${location.name}</h3></b></br>
            <span class="span_info_Location"><b>Clima: </b>${location.climate}</span></br>
            <span class="span_info_Location"><b>Terreno: </b>${location.terrain}</span></div></div></br>`;
            });

            //sección de los vehículos
            const sectionVehicleMovie = document.createElement("section");
            sectionVehicleMovie.classList.add("section_vehicle_movie");
            sectionVehicleMovie.innerHTML=`<span class="span_title_vehicle"><b><h2 class= "h2_section_vehicle">Vehículos:</h2></b></br></span>`

            const vehicleMovie = filmsPublished.vehicles;
            vehicleMovie.forEach((vehicle) => {  
            sectionVehicleMovie.innerHTML+=`
            <div class="section_div_vehicle_movie"><img src="${vehicle.img}" class="div_img_vehicle" /><br>
            <div class= "div_info_vehicle"><b><h3 class="name_location"><p class="name_vehicle">${vehicle.name}</h3></b></br>
            <span class="span_info_vehicle"><b>Descripción: </b>${vehicle.description}</span></br>
            <span class="span_info_vehicle"><b>Clase: </b>${vehicle.vehicle_class}</span></br>
            <span class="span_info_vehicle"><b>Capacidad: </b>${vehicle.length}</span></br></div></div></br>`;
            });    
    
         mainmovies.append(asideInfoMovie, sectionDescripMovie, sectionPeopleMovie, sectionLocationMovie, sectionVehicleMovie, btnBackHome );
    }
})}
showInfoMovies(films);

/*Filtro para el año de publicación*/
const yearMovie = films.map((item) => {return item.release_date});
const moviePremier = yearMovie.filter((item, index) => {
    return yearMovie.indexOf(item) === index;})

const selectYearPublished = document.querySelector("#input_publication0");
for (let i = 0; i < moviePremier.length; i++) {
    let yearMovieTittle = `
    <option value="${moviePremier[i]}">${moviePremier[i]}</option>`
    selectYearPublished.innerHTML += yearMovieTittle;
}

selectYearPublished.addEventListener("change", () => {
    showInfoMovies(filterYearPublished(films, selectYearPublished.value));
});

/*Filtro para buscar el productor*/
const searchDuplicateProducter = films.map((item) => { return item.producer });
const noDuplicatemovieProducer = searchDuplicateProducter.filter((item, index) => {
    return searchDuplicateProducter.indexOf(item) === index;});

const selectNameProducer = document.querySelector("#input_publication1");
for (let i = 0; i < noDuplicatemovieProducer.length; i++) {
    let nameProducer = `
    <option value="${noDuplicatemovieProducer[i]}">${noDuplicatemovieProducer[i]}</option>`   
    selectNameProducer.innerHTML += nameProducer;
}
selectNameProducer.addEventListener("change", () => {
    showInfoMovies(filterMoviexProducer(films, selectNameProducer.value));
});

/*Filtro ascendente y descendente alfabéticamente*/
const selectSortOrder = document.querySelector("#input_publication2");
selectSortOrder.addEventListener("change", () => {
    showInfoMovies(sortData(films,selectSortOrder.value))
});

/*Filtro ranking por puntaje de películas*/
const selectRankingMovies = document.querySelector("#input_publication3");
selectRankingMovies.addEventListener("change", () => {
    showInfoMovies(sortMovieRanking(films,selectRankingMovies.value))
});
