'use strict'
const store = require('./store')
const showLocationsTemplate = require('./templates/helpers/location-listing.handlebars')
const showReviewsTemplate = require('./templates/helpers/review-listing.handlebars')
const selectBeerTemplate = require('./templates/helpers/select-beer.handlebars')
const selectReviewTemplate = require('./templates/helpers/select-review.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#sign-up').hide()
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up!', error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  store.user = response.user
  $('#sign-in').hide()
  $('#get').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#viewReviews').show()
  $('#showLocation').show()
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#viewReviews').hide()
  $('.reviews').html('')
  $('#showLocation').hide()
  $('.location').html('')
  $('.selectbeer').html('')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#password3').val('')
  $('#password4').val('')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password', error)
}

const getLocationsSuccess = function (data) {
  $('#message').text('You are now able to start reviewing beers!')
  const showLocationsHTML = showLocationsTemplate({ locations: data.locations })
  $('.location').html(showLocationsHTML)
  $('.selectbeer').html('')
}
const getLocationsFailure = function () {
  $('#message').text('Get Local Breweries Failed')
}

const getReviewsSuccess = function (data) {
  $('#message').text('Here are your reviews, if none appear go to local breweries to create reviews!')
  const showReviewsHTML = showReviewsTemplate({ reviews: data.reviews })
  $('.reviews').html(showReviewsHTML)
}
const getReviewsFailure = function () {
  $('#message').text('Get Reviews Failed')
}

const createReviewSuccess = function (data) {
  $('#message').text('You have successfully created a new review!')
  $('.selectbeer').html('')
}
const createReviewFailure = function () {
  $('#message').text('Review failed to create!')
}
const getBeerSuccess = function (data) {
  $('#message').text('You have successfully selected a yummy beverage!')
  $('.location').html('')
  const selectBeerHTML = selectBeerTemplate({ beer: data.beer })
  $('.selectbeer').html(selectBeerHTML)
}
const getBeerFailure = function () {
  $('#message').text('Unable to select beer!')
}

const getReviewSuccess = function (data) {
  $('#message').text('You have successfully selected a your review!')
  $('.reviews').html('')
  const selectReviewHTML = selectReviewTemplate({ review: data.review })
  $('.chosen-review').html(selectReviewHTML)
}
const getReviewFailure = function () {
  $('#message').text('Unable to select Review!')
}
const deleteReviewSuccess = function () {
  $('#message').text('You have successfully deleted your review!')
  $('.reviews').html('')
}
const deleteReviewFailure = function () {
  $('#message').text('Delete Failed')
}

const updateReviewSuccess = function (data) {
  $('#message').text('Edit Successful')
}
const updateReviewFailure = function () {
  $('#message').text('Edit Failed')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getLocationsSuccess,
  getLocationsFailure,
  getReviewsSuccess,
  getReviewsFailure,
  createReviewSuccess,
  createReviewFailure,
  getBeerSuccess,
  getBeerFailure,
  deleteReviewFailure,
  deleteReviewSuccess,
  getReviewFailure,
  getReviewSuccess,
  updateReviewSuccess,
  updateReviewFailure
}
