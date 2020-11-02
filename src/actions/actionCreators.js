import * as tipo from './actionTypes'

export function actSumar(valor){
    return {
        type : tipo.ACT_SUMAR,
        value : valor
    }
}


export function actRestar(valor){
    return {
        type : tipo.ACT_RESTAR,
        value : valor
    }
}