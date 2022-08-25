import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from './store'
import {unsplash, authenticationUrl} from './API/unsplashApi';

const code = window.location.search.split('code=')[1];
console.log(code)
console.log(unsplash)

if (code) {
  unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.access_token);
            unsplash.auth.setBearerToken(json.access_token);
        }).then( window.history.pushState(null, null, '/'))
        .then(
            ReactDOM.render(
            <Provider store={store}>
              <Router>
                <App />
              </Router>
            </Provider>,
            document.getElementById('root')
            )
        )
} else {
    window.location.assign(authenticationUrl);
  }
