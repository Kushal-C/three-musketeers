import { createAddVoterAction } from "../actions/voterActions";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { VoterCreation } from "../components/VoterCreation";

export const VoterCreationContainer = () => {

    const voters = useSelector(state => state.voters);

    const action = bindActionCreators({
        onAddVoter : createAddVoterAction,
    }, useDispatch());

    return (
        <VoterCreation voters={voters} {...action} />
    )
}