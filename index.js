var unirest = require('unirest');

unirest.post('https://api.github.com/graphql')
  /*
  .auth({
    user: 'leogdion',
    pass: '80deaf03c3e354b8b4d9759af6eee11ef9939a89',
    sendImmediately: true
  })
  */
  .headers({
    //'Accept': 'application/vnd.github.mercy-preview+json', 
    'User-Agent': 'Awesome-Awesome'
  })
  //.field({'q': 'topic:awesome-list+topic:awesome'})
  .send({
    'query': '{  search(query: "topic:awesome", type: REPOSITORY, first: 100) {    edges {      node {        ... on Repository {          name          description          url          repositoryTopics(first: 100) {            edges {              node {                topic {                  name                }              }            }          }        }      }    }  }}'
  })
  .end(function(response) {
    console.log(response.body);
  });

/*
# Type queries into this side of the screen, and you will 
# see intelligent typeaheads aware of the current GraphQL type schema, 
# live syntax, and validation errors highlighted within the text.

# We'll get you started with a simple query showing your username!
query { 
  search(query: "topic:awesome", type:REPOSITORY, first:100){
    edges {
      node {
        ... on Repository {
          name
          description
          url
          repositoryTopics(first:100) {
            edges {
              node {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
*/