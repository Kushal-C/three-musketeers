import { createAddVoterAction, createReplaceVoterAction, createRemoveVoterAction, createCancelVoterAction, createEditVoterAction, createSortVotersAction } from "../actions/voterActions";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { VoterCreation } from "../components/VoterCreation";

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";

const sortedVotersSelector = sortedItemsSelector("voters", "votersSort");

export const VoterCreationContainer = () => {

    const voters = useSelector(sortedVotersSelector);
    const voterId = useSelector(state => state.editVoterId);
    const votersSort = useSelector(s => s.votersSort);


    const action = bindActionCreators({
        onAddVoter : createAddVoterAction,
        OnSaveVoter : createReplaceVoterAction,
        onDeleteVoter : createRemoveVoterAction,
        onCancelVoter : createCancelVoterAction,
        onEditVoter : createEditVoterAction,
        onSortVoters: createSortVotersAction,
    }, useDispatch());

    return (
        <VoterCreation voters={voters} voterId={voterId} votersSort={votersSort} {...action} />
    )
}