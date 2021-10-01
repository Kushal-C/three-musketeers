import { useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useMemo } from "react";
import { createSetActiveElectionAction , getElections } from "../actions/electionActions";
import { ElectionsList } from "../components/ElectionsList";

export const ElectionListContainer = () => {
    const elections = useSelector(state => state.elections);
    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators({
        onSetActiveElection : createSetActiveElectionAction,
    }, dispatch), [dispatch]);

    useEffect(() => dispatch(getElections()), [dispatch]);

    return (
        <ElectionsList elections={elections} {...actions} />
    );
}