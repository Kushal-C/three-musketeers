import { addVoter, replaceVoter, deleteVoter, createCancelVoterAction, createEditVoterAction, createSortVotersAction, refreshVoters} from "../actions/voterActions";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { VoterCreation } from "../components/VoterCreation";

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";

const sortedVotersSelector = sortedItemsSelector("voters", "votersSort");

export const VoterCreationContainer = () => {

    const voters = useSelector(sortedVotersSelector);
    const voterId = useSelector(state => state.editVoterId);
    const votersSort = useSelector(s => s.votersSort);

    const dispatch = useDispatch();
    
    const action = useMemo(() => bindActionCreators({
        onAddVoter : addVoter,
        onSaveVoter : replaceVoter,
        onDeleteVoter : deleteVoter,
        onCancelVoter : createCancelVoterAction,
        onEditVoter : createEditVoterAction,
        onSortVoters: createSortVotersAction,
    }, dispatch), [dispatch]);

    useEffect(() => dispatch(refreshVoters()), [dispatch]);

    return (
        <VoterCreation voters={voters} voterId={voterId} votersSort={votersSort} {...action} />
    )
}