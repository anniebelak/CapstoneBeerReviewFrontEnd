'use strict'
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const index = function () {
  // console.log('data is ', data.event)
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'GET'
  })
}
const ReviewIndex = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const createReview = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const show = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/beers/' + data,
    method: 'GET'
  })
}

const showReview = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteReview = function (data) {
  // console.log('data is ', data.event)
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  ReviewIndex,
  createReview,
  show,
  deleteReview,
  showReview

}
