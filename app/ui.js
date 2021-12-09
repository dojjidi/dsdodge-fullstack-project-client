const store = require('./store')

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#scores-display').text('Signed up successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#scores-display').removeClass()
  $('#scores-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const signInSuccess = function (responseData) {
  // we are going to add the `user` we got back in our response's data
  // to the `store` object. So we can access the user's token
  // later in api.js
  store.user = responseData.user
  // tell the user it was successful
  $('#scores-display').text('Signed in successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#scores-display').removeClass()
  $('#scores-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  // After we sign in, hide the section with the id `before-sign-in`
  $('#before-sign-in').hide()
  $('#after-sign-in').show()
  $('#after-start').hide()
}

const signInFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign in failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const changePasswordSuccess = function (responseData) {
  // tell the user it was successful
  $('#scores-display').text('Changed password successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#scores-display').removeClass()
  $('#scores-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Changing passwords failed!')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const signOutSuccess = function (responseData) {
  // tell the user it was successful
  $('#scores-display').text('Logout Successful!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#scores-display').removeClass()
  $('#scores-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
}

const signOutFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Logout Unsuccessful')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
