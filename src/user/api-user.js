const create = (user) => {
  return fetch('http://localhost:4000/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}

const list = () => {
  return fetch('http://localhost:4000/api/v1/users/list', {
    method: 'GET',
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const read = (params, credentials) => {
  return fetch('http://localhost:4000/api/v1/users/' + params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const update = (params, credentials, user) => {
  return fetch('http://localhost:4000/api/v1/users/' + params.userId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: user
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const remove = (params, credentials) => {
  return fetch('http://localhost:4000/api/v1/users/' + params.userId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const follow = (params, credentials, followId) => {
  return fetch('http://localhost:4000/api/v1/users/follow/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, followId: followId})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const unfollow = (params, credentials, unfollowId) => {
  return fetch('http://localhost:4000/api/v1/users/unfollow/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, unfollowId: unfollowId})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const findPeople = (params, credentials) => {
  return fetch('http://localhost:4000/api/v1/users/findpeople/' + params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

export {
  create,
  list,
  read,
  update,
  remove,
  follow,
  unfollow,
  findPeople
}
