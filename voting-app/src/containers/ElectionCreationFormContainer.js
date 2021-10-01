import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import { ElectionCreationForm } from '../components/ElectionCreationForm';

import { createElection } from '../actions/electionActions';

export const ElectionCreationFormConatiner = () => {


    const actions = bindActionCreators({
      onAdd: createElection,
    }, useDispatch());

    return( 
    <ElectionCreationForm buttonText="Add Election"  {...actions}/>
    );
}