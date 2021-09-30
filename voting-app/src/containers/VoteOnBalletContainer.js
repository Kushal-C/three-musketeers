import { bindActionCreators } from "redux";
import { createVoteOnElectionAction } from "../actions/electionActions";
import { useSelector, useDispatch } from "react-redux";
import { VoteOnBallet } from "../components/VoteOnBallot";

export const VoteOnBalletContainer = () => {
    const activeElection = useSelector(state => state.activeElection);
    const actions = bindActionCreators({
        onVoteOnElection: createVoteOnElectionAction,
    }, useDispatch());

    return (
        <VoteOnBallet election={activeElection} {...actions} />
    );
}