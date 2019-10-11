import tokenService from "./tokenService";


const BASE_URL = '/api/collections';

export default {
    addAnime,
    getCollection,
    getAnimes,
};

function addAnime(newAnime) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(newAnime)

    }).then(res => {
      if (res.ok) return res;  
    })
}

function getCollection() {
    return fetch(BASE_URL, + 'collection', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
}



const ANIME_URL = `https://api.jikan.moe/v3`;

async function getAnimes(query) {
  return fetch(ANIME_URL + '/anime/1/characters_staff')
  .then(res => res.json())
  .then(data => data);
};