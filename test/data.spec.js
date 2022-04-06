import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterMoviexProducer, filterYearPublished, sortMovieRanking, sortData } from '../src/data.js';

const dataFilms =  [
  {"title": "El castillo en el cielo",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"},

  { "title": "Mi vecino Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93"}
    ]

describe('filterMoviexProducer', () => {
  it('Devuelve un array siempre', () => {
    expect(filterMoviexProducer(dataFilms, "producer")instanceof Array).toBe(true);
  });
  it('Devuelve el resultado', () => {
    const result = filterMoviexProducer(dataFilms, "Hayao Miyazaki")
    expect(result.length).toBe(1);
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
      {
      "title": "El castillo en el cielo",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "release_date": "1986",
      "rt_score": "95"
      },
    ]
    expect(result).toEqual(resultExpected);
  })
});

describe('sortMovieRanking', () => {
    it('Devuelve el orden del puntaje de las película', () => {
      const result = sortMovieRanking(dataFilms, "Menos rankeadas")
      const resultExpected = [
        {
          "title": "Mi vecino Totoro",
          "director": "Hayao Miyazaki",
          "producer": "Hayao Miyazaki",
          "release_date": "1988",
          "rt_score": "93"
        },
        {
          "title": "El castillo en el cielo",
          "director": "Hayao Miyazaki",
          "producer": "Isao Takahata",
          "release_date": "1986",
          "rt_score": "95"
        }
      ]
      expect(result).toEqual(resultExpected);
      });
    it('Película mejor posicionada de acuerdo a su puntaje', () => {
      const result = sortMovieRanking(dataFilms, "Mejores rankeadas")
      const resultExpected = [
        {
          "title": "El castillo en el cielo",
          "director": "Hayao Miyazaki",
          "producer": "Isao Takahata",
          "release_date": "1986",
          "rt_score": "95"
        },
        {
          "title": "Mi vecino Totoro",
          "director": "Hayao Miyazaki",
          "producer": "Hayao Miyazaki",
          "release_date": "1988",
          "rt_score": "93"
        }
      ];
      expect(sortMovieRanking(result)).toEqual(resultExpected);
      });

      it('Devuelve un array siempre', () => {
        expect(filterMoviexProducer(dataFilms, "producer")instanceof Array).toBe(true);
      });
      
  });

describe('sortData', () => {
  it('Devuelve el orden de la película A-Z', () => {
    const result = sortData(dataFilms, "A-Z")
    const resultExpected = [
      {
        "title": "El castillo en el cielo",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95"
      },
      {
        "title": "Mi vecino Totoro",
        "director": "Hayao Miyazaki",
        "producer": "Hayao Miyazaki",
        "release_date": "1988",
        "rt_score": "93"
      }
    ]
    expect(result).toEqual(resultExpected);
  });

    it('Devuelve el orden de la película de Z-A', () => {
    const result = sortData(dataFilms, "Z-A")
    const resultExpected = [
      {
        "title": "Mi vecino Totoro",
        "director": "Hayao Miyazaki",
        "producer": "Hayao Miyazaki",
        "release_date": "1988",
        "rt_score": "93"
      },
      {
        "title": "El castillo en el cielo",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95"
      }
    ]
    expect(sortData(result)).toEqual(resultExpected);
  });

  
});