import { combineReducers } from "redux";
import getPockemondReducers from './PockemondReducers';

const rootReducer = combineReducers({
    pockemons: getPockemondReducers
})

export default rootReducer;