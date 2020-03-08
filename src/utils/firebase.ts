import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'
import ReduxSagaFirebase from 'redux-saga-firebase'

const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PROD_MESSAGING_APP_ID,
  measurementId: process.env.REACT_APP_PROD_MESSAGING_MEASUREMENT_ID
}

const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DEV_MESSAGING_APP_ID,
  measurementId: process.env.REACT_APP_DEV_MESSAGING_MEASUREMENT_ID
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

const FirebaseApp = firebase.initializeApp(config)
firebase.analytics()

const reduxSagaFirebase = new ReduxSagaFirebase(FirebaseApp)

export default reduxSagaFirebase
