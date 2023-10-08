//创建仓库
import {createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'

//导出仓库
export default createStore(rootReducer,applyMiddleware(logger));