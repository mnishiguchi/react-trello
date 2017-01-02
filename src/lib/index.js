import React from 'react'

// The es6-promise is a polyfill for ES6-style Promises,
// https://github.com/stefanpenner/es6-promise
import { polyfill } from 'es6-promise'

// The isomorphic-fetch adds fetch as a global so that its API is consistent
// between client and server. We must bring our own ES6 Promise compatible polyfill,
// such as es6-promise.
// https://github.com/matthew-andrews/isomorphic-fetch
import fetch from 'isomorphic-fetch'


// ---
// PRIVATE FUNCTIONS
// ---


// Configure the default header fields.
const defaultHeaders = {
    'Accept'      : 'application/json',
    'Content-Type': 'application/json',
}

/**
 * Builds a header object for an HTTP request with an auth token.
 * @return {Object}
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 * https://developer.mozilla.org/en-US/docs/Web/API/Headers
 */
function buildHeaders() {
    return { ...defaultHeaders, Authorization: getAuthToken() }
}


// ---
// PUBLIC FUNCTIONS
// ---


/**
 * Stores the auth token (JWT) in the local storage.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
export function setAuthToken(jwt) {
    window.localStorage.setItem('phoenixAuthToken', jwt)
}

/**
 * @return {Object} The auth token (JWT) for the current user if it exists.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
export function getAuthToken() {
    return window.localStorage.getItem('phoenixAuthToken')
}

/**
 * Raises error if response status was gte 300.
 * @param  {Response} response
 * @return {Response} the same as the one that was passed in unless an error is thrown.
 */
export function checkStatus(response) {

    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

/**
 * Converts the raw data to a JavaScript object.
 * @param  {Response} response
 * @return {Promise} a promise that resolves with a JSON object.
 * https://davidwalsh.name/fetch
 * http://stackoverflow.com/a/32731381/3837223
 * https://developers.google.com/web/fundamentals/getting-started/primers/promises#chaining
 */
export function parseJSON(response) {
    return response.json()
}

/**
 * Sends a GET request for the specified URL.
 * @param  {String} url
 * @return {Promise}
 */
export function httpGet(url) {

    const promise = fetch(url, {
        headers: buildHeaders(),
    })
    .then(checkStatus)
    .then(parseJSON)

    return promise
}

/**
 * @param  {String} url
 * @param  {Object} data
 * @return {Promise}
 */
export function httpPost(url, data) {
    // Convert data to a JSON string.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    const body = JSON.stringify(data)

    // https://davidwalsh.name/fetch
    const promise = fetch(url, {
        method : 'post',
        headers: buildHeaders(),
        body   : body,
    })
    .then(checkStatus)
    .then(parseJSON)

    return promise
}

/**
 * @param  {String} url
 * @return {Promise}
 */
export function httpDelete(url) {

    const promise = fetch(url, {
        method : 'delete',
        headers: buildHeaders(),
    })
    .then(checkStatus)
    .then(parseJSON)

    return promise
}

/**
 * Updates the document title with the specified string.
 * @param {String} title
 */
export function setDocumentTitle(title) {
    document.title = `${title} | Project manager`
}

/**
 * A component that displays an error message.
 * @param  {?} errors
 * @param  {?} ref
 */
export function renderErrorsFor(errors, ref) {

    if (!errors) { return false }

    return errors.map((error, i) => {
        if (error[ref]) {
            return (
                <div key={i} className="error">
                  {error[ref]}
                </div>
            )
        }
    })
}
