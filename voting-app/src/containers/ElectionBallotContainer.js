import { useEffect } from "react";
import { refreshVoters } from "../actions/voterActions";
import { useSelector, useDispatch } from "react-redux";
import { ElectionBallot } from "../components/ElectionBallot";



export const ElectionBallotContainer = () => {

    const activeElection = useSelector(state => state.activeElection);
    const voters = useSelector(state => state.voters);

    const dispatch = useDispatch();

    useEffect(() => dispatch(refreshVoters()), [dispatch]);

    return (
        <ElectionBallot election={activeElection} voters={voters} />
    )
}