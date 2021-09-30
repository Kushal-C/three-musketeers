import { useSelector } from "react-redux";
import { ElectionBallot } from "../components/ElectionBallot";

export const ElectionBallotContainer = () => {

    const activeElection = useSelector(state => state.activeElection);
    const voters = useSelector(state => state.voters);

    console.log(activeElection);

    return (
        <ElectionBallot election={activeElection} voters={voters} />
    )
}