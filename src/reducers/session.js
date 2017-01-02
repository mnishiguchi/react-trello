// - currentUser => set after authenticating visitors
// - socket      => used for connecting to channels
// - error       => allows us to keep track of authentication errors
const initialState = {
  currentUser: null,
  socket     : null,
  error      : null,
};

const reducer = (state = initialState, action = {}) => {
  const { currentUser } = action

  switch (action.type) {
    case 'CURRENT_USER':
      return {
        ...state,
        currentUser
      };
    default:
      return state;
  }
}

export default reducer
