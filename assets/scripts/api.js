'use strict'
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
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
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'GET'
  })
}
const ReviewIndex = function (data) {
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
  return $.ajax({
    url: config.apiOrigin + '/beers/' + data,
    method: 'GET'
  })
}

const showReview = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteReview = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateReview = function (reviewId, data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + reviewId,
    method: 'PATCH',
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
  showReview,
  updateReview

}
