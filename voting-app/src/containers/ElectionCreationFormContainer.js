import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { ElectionCreationForm } from '../components/ElectionCreationForm';

import { createNewElectionAction } from '../actions/electionActions';

export const ElectionCreationFormConatiner = () => {
    
    //const dispatch = useDispatch();
    const elections = useSelector(state => state.elections);

    const actions = bindActionCreators({
      onAdd: createNewElectionAction,
    }, useDispatch());

    return( 
    <ElectionCreationForm buttonText="Add Election"  {...actions}/>
    );
}