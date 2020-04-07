import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './auth/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers/rootReducer.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore , getFirestore } from "redux-firestore";
import { reactReduxFirebase , getFirebase } from "react-redux-firebase";
import firebase from './Base.js';


const store = createStore(rootReducer,
             compose(
                 applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
                 reduxFirestore(firebase),
                 reactReduxFirebase(firebase,{useFirestoreForProfile: true, userProfile:'users' , attachAuthIsReady: true})
                 )
            );

store.firebaseAuthIsReady.then( () => {
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
})
