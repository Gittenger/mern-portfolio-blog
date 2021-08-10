export const auth = {
  authUser: function (user = {}, options) {
    return fetch(`${process.env.REACT_APP_API}/users/${options.authRoute}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
  },
  logout: function () {
    localStorage.removeItem('jwt')
    return fetch(`${process.env.REACT_APP_API}/users/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      credentials: 'include',
    })
      .then(() => {
        window.location.reload()
      })
      .catch((err) => console.error(err))
  },
  setAuthToken: function (data, next) {
    if (window !== 'undefined') {
      localStorage.setItem('jwt', JSON.stringify(data))
    }
    next()
  },
  checkAuthToken: function () {
    return typeof window == 'undefined'
      ? false
      : localStorage.getItem('jwt')
      ? JSON.parse(localStorage.getItem('jwt'))
      : false
  },
}

export default auth
