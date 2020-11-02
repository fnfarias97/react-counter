import * as tipos from '../actions/actionTypes'

export default function reducer(state, action){
    let newState = state;
    console.log("acá pasó el reducer");
    console.log(action.type);

    switch (action.type){
        case tipos.ACT_SUMAR : 
            newState = {contador : state.contador + 1}
            break;
        case tipos.ACT_RESTAR :
            newState = {contador : state.contador - 1}
            break;
    }


    return newState;
}