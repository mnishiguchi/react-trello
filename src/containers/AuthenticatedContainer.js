import React            from 'react';
// import { connect }      from 'react-redux';
// import { routeActions } from 'react-router-redux'

class AuthenticatedContainer extends React.Component {
  render() {
    // TODO
    return (
      <div>
        This is AuthenticatedContainer
        {this.props.children}
      </div>
    )
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  // Check if the jwt token is present in the browsers local storage.
  // If it does not exist, user will be redirected to the sign up page.
  // ---
  // TODO: Use guardian_db instead of localStorage
  // http://disq.us/p/16vnine
  // https://github.com/hassox/guardian_db
  // https://github.com/ueberauth/guardian#plug-api
  componentDidMount() {
    // const { dispatch, currentUser } = this.props;
    //
    // if (window.localStorage.getItem('phoenixAuthToken')) {
    //   dispatch(actions.currentUser());
    // } else {
    //   dispatch(routeactions.push('/sign_up'));
    // }
  }
} // end class

// const mapStateToProps = (state) => ({
//   currentUser: state.session.currentUser,
// });
//
// export default connect( mapStateToProps )( AuthenticatedContainer );

export default AuthenticatedContainer
