//“중앙 state 관리소" 인 Store를 만드는 설정 코드들이 있는 파일 입니다.

import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import todos from "../modules/todos";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger'




const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)
));

export default store;