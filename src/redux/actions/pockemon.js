export const GET_POCKEMONS_START = 'GET_POCKEMONS_START';
export const GET_POCKEMONS_SUCCESS = 'GET_POCKEMONS_SUCCESS';
export const GET_POCKEMONS_FAILD = 'GET_POCKEMONS_FAILD';
export const GET_POCKEMONS_END = 'GET_POCKEMONS_END';

/** Actions **/
export const startGetPockemons = payload => ({
    type: GET_POCKEMONS_START,
    ...payload
}) 

export const successGetPockemons = payload => ({
    type: GET_POCKEMONS_SUCCESS,
    ...payload
})  

export const faildGetPockemons = payload => ({
    type: GET_POCKEMONS_FAILD,
    ...payload
})

export const endGetPockemons = payload => ({
    type: GET_POCKEMONS_END,
    ...payload
})