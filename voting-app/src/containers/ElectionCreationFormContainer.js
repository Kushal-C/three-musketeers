import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
//import { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { ElectionCreationForm } from '../components/ElectionCreationForm';
import { useSortedList } from '../hooks/useSortedList';

import { createNewElectionAction } from '../actions/electionActions';

export const ElectionCreationFormConatiner = ({initialElections}) => {

  //const [ , , appendElection, , , ,  ] = useSortedList([ ...initialElections ]);
    
    //const dispatch = useDispatch();
    const elections = useSelector(state => state.elections);

    // const addElection = (newElection) => {
    //     appendElection(newElection);
    //   };

    const actions = bindActionCreators({
      onAdd: createNewElectionAction,
    }, useDispatch());

    return <ElectionCreationForm buttonText="Add Election"  {...actions}/>;
}