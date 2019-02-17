require('dotenv').config();
const expect = require('chai').expect;

describe('API Client', () => {
  const OmdbApiClient = require('../lib/index').OmdbApiClient;
  const API_KEY: string = process.env.OMDB_API_KEY;
  const client = new OmdbApiClient(API_KEY);

  it('getByTitle response has Title, Year and Genre fields', () => {
    client.getByTitle('Star Wars')
      .then(result => {
        expect(result).to.have.all.keys('Title', 'Year', 'Genre');
      })
      .catch(() => {
      });
  });

  it('getByImdbId response has Title, Year and Genre fields', () => {
    client.getByImdbId('tt0076759')
      .then(result => {
        expect(result).to.have.all.keys('Title', 'Year', 'Genre');
      })
      .catch(() => {
      });
  });

  it('search response has more then 3 movies with correct fields', () => {
    client.search('Star Wars')
      .then(results => {
        expect(results).to.have.lengthOf.at.least(3);
        expect(results[0]).to.have.all.keys('Title', 'Year', 'Genre');
      })
      .catch(() => {
      });
  });
});
