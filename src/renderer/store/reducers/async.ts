/**
 * おみくじ
 */
 const initialStateOmikuji = {
    omikuji: null,
    error: false
}

export function omikujiReducer(state = initialStateOmikuji, action: any) {
    switch (action.type) {
        case 'START_REQUEST':
            return { ...state, omikuji: undefined, error: false }
        case 'RECEIVE_DATA':
            return action.payload.error != null
                ? { ...state, error: true }
                : { ...state, omikuji: action.payload.data, error: false }
        default: return state
    }
}
