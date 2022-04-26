import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { kpiReducer } from './kpiReducer';
import { pfmsReducer } from './pfmReducer';
import { projectsReducer } from './projectReducer'

let reducerAll = combineReducers({ auth: authReducer, projects: projectsReducer, kpi: kpiReducer, pfms: pfmsReducer })

export default reducerAll;
