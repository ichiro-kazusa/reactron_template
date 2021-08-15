import { connect } from "react-redux";
import CustomerContent from "@/components/CustomerContent";
import { incrementCounter, decrementCounter, resetCounter } from "../actions/counter";


function mapStateToProps(store: any) {
    const counter = store.counterReducer.counter
    return { counter }
}

function mapDispatchToProps(dispatch: any) {
    return {
        incrementCounter() {
            dispatch(incrementCounter())
        },
        decrementCounter() {
            dispatch(decrementCounter())
        },
        resetCounter() {
            dispatch(resetCounter())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CustomerContent)