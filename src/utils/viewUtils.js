import React from 'react'

/**
 * Updates the document title with the specified string.
 * @param {String} title
 */
export function setDocumentTitle(title) {
    document.title = `${title} | Project manager`
}

/**
 * Renders an error message for the specified ref.
 * @param  {Array} errors
 * @param  {node} ref
 */
export function renderErrorForRef(errors, ref) {

    if (!errors) { return false }

    return errors.map((error, i) => (
        error[ref] ? (
            <div key={i} className="error">
                {error[ref]}
            </div>
        ) : null
    ))
}
