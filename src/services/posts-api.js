const BASE_URL = process.env.DATABASE_URL;

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(post) {
  return fetch({
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(post)
  }).then(res => res.json());
}

export function update(post) {
  return fetch(`${BASE_URL}/${post._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(post)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

export default {
    getAll: function () {

    },

    deleteOne: function (id) {

    },
    
    updateOne(id, data) {

    },

    addOne(data) {
        
    }

}