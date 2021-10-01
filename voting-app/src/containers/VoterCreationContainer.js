import { createAddVoterAction, createReplaceVoterAction, createRemoveVoterAction, createCancelVoterAction, createEditVoterAction } from "../actions/voterActions";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { VoterCreation } from "../components/VoterCreation";

export const VoterCreationContainer = () => {

    const voters = useSelector(state => state.voters);
    const voterId = useSelector(state => state.editVoterId);

    const action = bindActionCreators({
        onAddVoter : createAddVoterAction,
        OnSaveVoter : createReplaceVoterAction,
        onDeleteVoter : createRemoveVoterAction,
        onCancelVoter : createCancelVoterAction,
        onEditVoter : createEditVoterAction,
    }, useDispatch());

    return (
        <VoterCreation voters={voters} voterId={voterId} {...action} />
    )
}