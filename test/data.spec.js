import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterMoviexProducer, filterYearPublished, sortMovieRanking, sortData } from '../src/data.js';

const dataFilms =  [
  {
    "title": "El castillo en el cielo",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95" },

  {
    "title": "Mi vecino Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93" }
    ];

describe('filterMoviexProducer', () => {
  it('Devuelve un array siempre', () => {
    expect(filterMoviexProducer(dataFilms, "producer")instanceof Array).toBe(true)
  });
  it('Devuelve el resultado', () => {
    const result = filterMoviexProducer(dataFilms, "Hayao Miyazaki")
    expect(result.length).toBe(1);
  });
  it('Devuelve el nombre del productor', () => {
    const result = filterMoviexProducer(dataFilms, "Isao Takahata")
    expect(result).toBeTruthy();
  });
  it('Devuelve películas del productor', () => {
    const result = filterMoviexProducer(dataFilms, "Hayao Miyazaki")
    expect(result).toEqual([{
      "title": "Mi vecino Totoro",
      "director": "Hayao Miyazaki",
      "producer": "Hayao Miyazaki",
      "release_date": "1988",
      "rt_score": "93" }]);
  });
});

describe('filterYearPublished', () => {
  it('Devuelve un objeto siempre', () => {
    expect(filterYearPublished(dataFilms, "release_date")instanceof Object).toBe(true);
  });
  it('Devuelve el año de publicación', () => {
    const result = filterYearPublished(dataFilms, "1986")
    expect(result.length).toBe(1);
  });
  it('Devuelve el año de publicación', () => {
    const result = filterYearPublished(dataFilms, "1986")
    expect(result).toBeTruthy();
  });
  it('Devuelve películas del año 1988', () => {
    const result = filterYearPublished(dataFilms, "1988")
    expect(result).toEqual([{
      "title": "Mi vecino Totoro",
      "director": "Hayao Miyazaki",
      "producer": "Hayao Miyazaki",
      "release_date": "1988",
      "rt_score": "93" }]);
  });
});

describe('sortMovieRanking', () => {
  it('Devuelve un array siempre', () => {
    expect(sortMovieRanking(dataFilms, "rt_score")instanceof Array).toBe(true);
  });
  it('Devuelve el valor del puntaje de la película', () => {
    const result = sortMovieRanking(dataFilms, "95")
    expect(result).toBeTruthy();
  });
  it('Devuelve el orden del puntaje de las películas', () => {
    const result = sortMovieRanking(dataFilms, "95")
    expect(result).toBeTruthy();
  });
  it('Devuelve el año de publicación', () => {
    const result = sortMovieRanking(dataFilms, "1993")
    expect(result).toBeTruthy();
  });
});

describe('sortData', () => {
  it('Devuelve un array siempre String', () => {
    expect(sortData(dataFilms, "title")instanceof String).toBe(false);
  });
  it('Devuelve un array ordenado', () => {
    const result = sortData(dataFilms, "a.title < b.title");
    expect(result).toBeTruthy();
  });
  it('Devuelve el orden de la película Z-A', () => {
    const result = sortData(dataFilms, "Mi vecino Totoro")
    expect(result).toBeTruthy();
  });
  it('Devuelve el orden de la película de A-Z', () => {
    const result = sortData(dataFilms, "Mi vecino Totoro")
    expect(result).toBeTruthy();
  });
  it('Es un resultado con dato definido', () => {
    expect(sortData).toBeDefined();
  });
});