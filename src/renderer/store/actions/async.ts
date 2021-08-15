// an action will dispatch when request starts.
const startRequest = () => ({
    type: 'START_REQUEST'
})


// an action will dipatch when data received or request timeout
const receiveData = (error: any, data?: any) => ({
    type: 'RECEIVE_DATA',
    payload: { error, data }
})


// an action will dispatch when request finished.
const finishRequest = () => ({
    type: 'FINISH_REQUEST'
})


async function omikuji(response: any) {
    const waitforms = Math.random()*1000 // random sleep time 0~1000ms
    await new Promise(resolve => setTimeout(resolve, waitforms)) // sleep
    switch (response) {
        case 0: return '大凶'
        case 1: return '中凶'
        case 2: return '小凶'
        case 3: return '小吉'
        case 4: return '中吉'
        case 5: return '大吉'
        default: throw Error
    }
}


// action creator for fetchng data
export function fetchOmikuji() {
    return async (dispatch: any) => {
        dispatch(startRequest())

        try {
            const data = await omikuji(Math.floor(Math.random() * 6))
            dispatch(receiveData(null, data))
        } catch (err) {
            dispatch(receiveData(err))
        }

        dispatch(finishRequest())
    }
}