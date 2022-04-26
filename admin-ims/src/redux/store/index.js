import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import authensaga from '../saga/authensaga'
import projectsaga from '../saga/projectsaga'
import kpisaga from '../saga/kpisaga'
import pfmsaga from '../saga/pfmsaga'

import reducerAll from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducerAll,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(authensaga)
sagaMiddleware.run(projectsaga)
sagaMiddleware.run(pfmsaga)
sagaMiddleware.run(kpisaga)

// store.subscribe(() => {
//     console.log(store.getState());
// })

export default store;