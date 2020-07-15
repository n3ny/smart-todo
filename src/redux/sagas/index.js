import { all } from "redux-saga/effects";

import pockemons from './pokemonSagas';

/**Exportar y ejecutar todas las sagas index saga  */
export default function* rootSaga() {
    yield all([
        pockemons(),
    ]);
}