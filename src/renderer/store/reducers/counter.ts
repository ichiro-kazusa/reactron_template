/**
 * カウンター
 */

 const initialStateCounter = {
    counter: 0
}

export function counterReducer(state = initialStateCounter, action: any) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'RESET_COUNTER':
            return {
                ...state,
                counter: initialStateCounter.counter
            }
        default:
            return state
    }
}

