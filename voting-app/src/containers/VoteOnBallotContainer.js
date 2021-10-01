import { bindActionCreators } from "redux";
import { updateElection } from "../actions/electionActions";
import { useSelector, useDispatch } from "react-redux";
import { VoteOnBallet } from "../components/VoteOnBallot";

export const VoteOnBalletContainer = ({voterId}) => {
    const activeElection = useSelector(state => state.activeElection);
    const actions = bindActionCreators({
        onVoteOnElection: updateElection,
    }, useDispatch());

    return (
        <VoteOnBallet election={activeElection} voterId={voterId} {...actions} />
    );
}