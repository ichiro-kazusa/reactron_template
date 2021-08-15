import { connect } from "react-redux";
import AsyncContent from "@/components/AsyncContent";
import { fetchOmikuji } from "../actions/async";

function mapStateToProps(store: any) {
    const omikuji = store.omikujiReducer.omikuji
    const error = store.omikujiReducer.error
    return { error, omikuji }
}

function mapDispatchToProps(dispatch: any) {
    return {
        fetchOmikuji() {
            dispatch(fetchOmikuji())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AsyncContent)