import { useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { createSetActiveElectionAction } from "../actions/electionActions";
import { ElectionsList } from "../components/ElectionsList";

export const ElectionListContainer = () => {
    const elections = useSelector(state => state.elections);
    const actions = bindActionCreators({
        onSetActiveElection : createSetActiveElectionAction,
    }, useDispatch());
    return (
        <ElectionsList elections={elections} {...actions} />
    );
}