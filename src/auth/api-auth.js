const signin = (user) => {
  return fetch('http://localhost:4000/api/v1/users/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}

const signout = () => {
  return fetch('http://localhost:4000/api/v1/users/signout/', {
    method: 'GET',
  }).then(response => {
      return response.json()
  }).catch((err) => console.log(err))
}

export {
  signin,
  signout
}
