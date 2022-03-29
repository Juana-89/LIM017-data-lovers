/*objeto ordena ascendente y descendente*/
export const sortData = (data,sortOrder) => {
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

/*objeto filtra por año de publicación*/
export const filterYearPublisher = (films ,release_date) => {
   const filterMovie = films.filter ((film) => {
  if (release_date === film.release_date) {
    return true;
  } else {
      return false;
  }});
  return filterMovie;
};

/*objeto filtra por productor*/
export const filterMoviexProducer = (films, nameProducer) => {
  const filterNameProducer = films.filter ((film) => {
  if (nameProducer === film.producer) {
      return true;
  } else {
      return false;
  }});
  return filterNameProducer;
};

