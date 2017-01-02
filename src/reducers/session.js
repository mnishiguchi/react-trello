// - currentUser => set after authenticating visitors
// - socket      => used for connecting to channels
// - error       => allows us to keep track of authentication errors
const initialState = {
  currentUser: null,
  socket     : null,
  error      : null,
};

const reducer = (state = initialState, action = {}) => {
  const {
    currentUser,
    // socket,
    // error,
  } = action

  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser,
        error: null
      }

    case 'LOG_OUT':
      return initialState
      
    case 'SESSION_ERROR':
      return {
        ...state,
        error: action.error
      }

    default:
      return state;
  }
}

export default reducer
