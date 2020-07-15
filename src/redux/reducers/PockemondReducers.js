import {
    GET_POCKEMONS_SUCCESS,
    GET_POCKEMONS_START,
    GET_POCKEMONS_FAILD,
    GET_POCKEMONS_END
} from '../actions/pockemon'

const initialState = {
    data: [],
    httpBussy: false,
    error: undefined,
    message: undefined
}

export default function getPockemondReducers(state = initialState, action) {
    switch (action.type) {
        case GET_POCKEMONS_START:
            return {
                ...state,
                httpBussy: true
            }
            break;

        case GET_POCKEMONS_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
            break;

        case GET_POCKEMONS_FAILD:
            return {
                ...state,
                error: action.payload,
                message: action.payload.message
            }
            break;

        case GET_POCKEMONS_END:
            return {
                ...state,
                httpBussy: false
            }
            break;

        default:
            return state;
            break;
    }
}