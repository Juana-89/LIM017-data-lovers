
//  import films from './main.js';

/*objeto ordena ascendente y descendente*/
export const sortData = (data,sortOrder) => {
  //console.log(data);
    if (sortOrder === "A-Z") {
      data.sort((a,b) => {
        if (a.title > b.title) {
            return 1;
        }else if (a.title < b.title) {
            return -1;
        }
        return 0;
    })
  }
  else {
  data.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }else if (a.title < b.title) {
      return 1;
    }
    return 0;
  })
}
return data;
};
/*objeto ordena mejores y menos rankeadas*/
export const sortMovieRanking =(data, sortOrder) => {
        if (sortOrder === "Menos rankeadas") {
          data.sort((c,d) => { 
            if (parseInt(c.rt_score) > parseInt(d.rt_score)) {
                return 1;
            } else if (parseInt(c.rt_score) < parseInt(d.rt_score)) {
                return -1;
            }
            return 0;
        })
    }
else {
  data.sort((c,d)=>{
    if (parseInt(c.rt_score) > parseInt(d.rt_score)) {
        return -1;
    } if (parseInt(c.rt_score) < parseInt(d.rt_score)) {
        return 1;
    }
    return 0;
})
}
return data;
}

///Función Año de Publicación
export const filterYearPublisher = (films ,release_date) => {
  //console.log(typeof film.release_date, typeof filterYearPublisher.value, film.release_date, filterYearPublisher.value)
  const filterMovie = films.filter ((film) => {
  if (release_date === film.release_date) {
    return true;
  } else {
      return false;
  }});
  return filterMovie;
};
