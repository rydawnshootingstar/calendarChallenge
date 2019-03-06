import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import App from './components/App';
import rootReducer from './reducers/rootReducer';

//Configure Redux Tool Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)
    )
);



//wrap App in Provider
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

var appRoot = document.getElementById('root');

ReactDOM.render(app, appRoot);


