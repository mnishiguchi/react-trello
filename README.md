# React trello

In this repo, I will build a Trello-like React app, following the tutorial [Trello tribute with Phoenix and React](https://github.com/bigardone/phoenix-trello) by Ricardo García Vega.

---

## Get started

```
npm install
npm start
```

Then visit [`localhost:3000`](http://localhost:3000) from your browser.

---

## API

```ex
registration_path  POST    /api/v1/registrations
     session_path  POST    /api/v1/sessions      
     session_path  DELETE  /api/v1/sessions      
current_user_path  GET     /api/v1/current_user  
```

---


## React resources

- [`React.createClass` versus `extends React.Component`](https://toddmotto.com/react-create-class-versus-component/)
- [react lifecycle](http://qiita.com/kawachi/items/092bfc281f88e3a6e456)
- [https://css-tricks.com/learning-react-router/](https://css-tricks.com/learning-react-router/)
- [ReactTraining/react-router](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)
- [https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)

---

## Some useful techniques

#### Redirection

```
import { browserHistory }  from 'react-router';
browserHistory.push('/some/path');
```

#### How to pass props to {this.props.children}
- [How to pass props to {this.props.children}](http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children)
