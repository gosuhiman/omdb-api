# omdb-api
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
