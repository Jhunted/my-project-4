import tokenService from "./tokenService";


const BASE_URL = '/api/collections';

export default {
    addAnime,
    getCollection
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
