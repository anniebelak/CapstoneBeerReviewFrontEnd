'use strict'
const getFormFields = require(`../../lib/get-form-fields`)

// const store = require('./store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('help')
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#email').val('')
  $('#password1').val('')
  $('#password2').val('')
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in-val').val('')
  $('#sign-password').val('')
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#password3').val('')
  $('#password4').val('')
}

const onChangePassword = function (event) {
  event.preventDefault()
  $('#password3').show()
  $('#password4').show()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const updatePassword = function (event) {
  $('#change-password').show()
}
// .select-beer button class on locations handlebars click event goes to the select handoebar to view beers//
const getLocations = function (event) {
  event.preventDefault()
  api.index()
    .then((locations) => {
      $(document).on('click', '.select-beer', onSelectBeer)
      return locations
    })
    .then(ui.getLocationsSuccess)
    .catch(ui.getLocationssFailure)
}

const getReviews = function (event) {
  event.preventDefault()
  api.ReviewIndex()
    .then((reviews) => {
      $(document).on('click', '.select-review', onSelectReview)
      return reviews
    })
    .then((reviews) => {
      $(document).on('click', '#updateReview', onUpdateReview)
      return reviews
    })
    .then(ui.getReviewsSuccess)
    .catch(ui.getReviewsFailure)
}

const onCreateReview = function (event) {
  event.preventDefault()
  const reviewData = {}
  reviewData.review = {}
  const data = getFormFields(event.target)
  reviewData.review.comment = data.review.comment
  reviewData.review.rating = data.review.rating
  reviewData.review.beer_id = data.review.beer_id

  api.createReview(reviewData)
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewFailure)
}

const onSelectBeer = function (event) {
  event.preventDefault()
  const selectedBeerId = $(this).parent().attr('data-id')
  api.show(selectedBeerId)
    .then(ui.getBeerSuccess)
    .catch(ui.getBeerFailure)
}
const onSelectReview = function (event) {
  event.preventDefault()
  console.log(event.target)
  const selectedReviewId = $('.select-review').attr('data-id')
  api.showReview(selectedReviewId)
    .then(ui.getReviewSuccess)
    .catch(ui.getReviewFailure)
}

const onDeleteReview = function (event) {
  event.preventDefault()
  const deleteID = $('.delete-reviews').attr('data-id')
  console.log(deleteID)
  api.deleteReview(deleteID)
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewFailure)
}

const onUpdateReview = function (event) {
  const data = getFormFields(this)
  console.log(event)
  console.log('on update event data is', data.event)
  // const updateID = $(this).parent().attr('data-id')
  event.preventDefault()
  api.updateEvent(data)
    .then(ui.updateEventSuccess)
    .catch(ui.updateEventFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#passwordShow').on('click', updatePassword)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#showLocation').on('click', getLocations)
  $('#viewReviews').on('click', getReviews)
  // .select-beer button class on the locations-listing handlebars//
  $('.select-beer').on('click', onSelectBeer)
  // div id from the html #getReviews
  // $('.select-review').on('click', onSelectBeer)
  $('.reviews').on('click', '.select-review', onSelectReview)
  $(document).on('submit', '#creatingReview', function (e) {
    onCreateReview(e)
  })
  $('.reviews').on('click', '.delete-reviews', onDeleteReview)
  // $(document).on('submit', '.delete-edit', function (e) {
  //   onDeleteReview(e)
  // })
  $('#viewReviews').hide()
  $('#showLocation').hide()
}

module.exports = {
  addHandlers
}
