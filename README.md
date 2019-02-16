# omdb-api [![CircleCI](https://circleci.com/gh/gosuhiman/omdb-api/tree/master.svg?style=svg)](https://circleci.com/gh/gosuhiman/omdb-api/tree/master)
OMDb API client for node.js

## Usage
````
const client = new OmdbApiClient(<your-registered-api-key>);

client.get('Star Wars')
    .then(result => {
        console.log(result);
    });

client.search('Star Wars')
    .then(result => {
        console.log(result);
    });
````
