

import { ElectionCreationTable } from '../components/ElectionCreationTable';

import { getElections } from '../actions/electionActions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const ElectionCreationTableContainer = () => {

    const dispatch = useDispatch();
    const elections = useSelector(state => state.elections);

    useEffect(() => dispatch(getElections()), [dispatch]);


    return(

        <div>   
            <h2>Table</h2>
            <ElectionCreationTable buttonText="Submit All Elections" elections={elections}/>; 
        </div>
    )
}