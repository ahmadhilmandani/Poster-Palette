/* eslint-disable no-undef */

export function setLocalStorage(email, username, address) {
  localStorage.setItem('username', username)
  localStorage.setItem('email', email)
  localStorage.setItem('address', address)
}

export function getLocalStorage() {
  const data = {
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
    address: localStorage.getItem('address')
  }

  if (data.username !== null && data.email !== null && data.address !== null)
    return data
  return null
}

export function removeAllLocalStorage() {
  localStorage.clear();
}

// module.exports = { customSetLocalStorage, getLocalStorage, removeAllLocalStorage }