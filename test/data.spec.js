import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterMoviexProducer, filterYearPublished, sortMovieRanking, sortData } from '../src/data.js';

const dataFilms =  [
  {"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "El castillo en el cielo",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"},

  {"id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  "title": "Mi vecino Totoro",
  "director": "Hayao Miyazaki",
  "producer": "Hayao Miyazaki",
  "release_date": "1988",
  "rt_score": "93",}
    ]

describe('filterMoviexProducer', () => {
  it('Devuelve un array siempre', () => {
    expect(filterMoviexProducer(dataFilms, "producer")instanceof Array).toBe(true);
  });
  it('Devuelve el resultado', () => {
    const result = filterMoviexProducer(dataFilms, "Hayao Miyazaki")
    expect(result.length).toBe(1);
  });
  it('Devuelve el nombre del productor', () => {
    const result = filterMoviexProducer(dataFilms, "Hayao Miyazaki")
    expect(result).toBeTruthy();
  });
});

describe('filterYearPublished', () => {
  it('Devuelve un resultado', () => {
    const result = filterYearPublished(dataFilms, "1986")
    expect(result.length).toBe(1);
  });
  it('Devuelve el título de la película por año', () => {
    const result = filterYearPublished(dataFilms, "1986")
    const resultExpected = [
      {"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "El castillo en el cielo",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"},
    ]
    expect(result).toEqual(resultExpected);
  });
  it('Devuelve películas del año 1988', () => {
    const result = filterYearPublished(dataFilms, "1988")
    expect(result).toEqual([
      {"id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
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
  it('Devuelve el orden del puntaje de las película', () => {
    const result = sortData(dataFilms, "Menos rankeadas")
    const resultExpected = [
      {
        id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
        title: 'Mi vecino Totoro',
        director: 'Hayao Miyazaki',
        producer: 'Hayao Miyazaki',
        release_date: '1988',
        rt_score: '93'
      },
      {
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'El castillo en el cielo',
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
        release_date: '1986',
        rt_score: '95'
      }
    ]
    expect(result).toEqual(resultExpected);
    });
});

describe('sortData', () => {
  it('Devuelve el orden de la película de A-Z', () => {
    const result = sortData(dataFilms, "A-Z")
    const resultExpected = [
      {
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'El castillo en el cielo',
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
        release_date: '1986',
        rt_score: '95'
      },
      {
        id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
        title: 'Mi vecino Totoro',
        director: 'Hayao Miyazaki',
        producer: 'Hayao Miyazaki',
        release_date: '1988',
        rt_score: '93'
      }
    ]
    expect(result).toEqual(resultExpected);
  });
  it('Devuelve el orden de la película de Z-A', () => {
    const result = sortData(dataFilms, "Z-A")
    const resultExpected = [
      {
        id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
        title: 'Mi vecino Totoro',
        director: 'Hayao Miyazaki',
        producer: 'Hayao Miyazaki',
        release_date: '1988',
        rt_score: '93'
      },
      {
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'El castillo en el cielo',
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
        release_date: '1986',
        rt_score: '95'
      }
    ]
    expect(result).toEqual(resultExpected);
  });
});