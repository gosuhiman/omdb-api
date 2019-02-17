import {expect} from 'chai';
import * as dotenv from 'dotenv';
import {OmdbGetResult, OmdbSearchResult} from "../lib";

dotenv.config();

describe('API Client', () => {
  const OmdbApiClient = require('../lib/index').OmdbApiClient;
  const API_KEY: string = process.env.OMDB_API_KEY;
  const client = new OmdbApiClient(API_KEY);

  it('getByTitle(Star Wars) returns movie with title Star Wars: Episode IV - A New Hope', async () => {
    const result: OmdbGetResult = await client.getByTitle('Star Wars');
    expect(result.Title).to.equal('Star Wars: Episode IV - A New Hope');
  });

  it('getByImdbId(tt0076759) returns movie with title Star Wars: Episode IV - A New Hope', async () => {
    const result: OmdbGetResult = await client.getByImdbId('tt0076759');
    expect(result.Title).to.equal('Star Wars: Episode IV - A New Hope');
  });

  it('search response has more then 3 movies with correct fields', async () => {
    const result: OmdbSearchResult = await client.search('Star Wars');
    expect(result.Search).to.have.lengthOf.at.least(3);
    expect(result.Search[0]).to.have.keys('Title', 'Year', 'Type', 'imdbID', 'Poster');
  });
});
