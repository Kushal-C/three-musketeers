

import { ElectionCreationTable } from '../components/ElectionCreationTable';

import { useSelector } from 'react-redux';

export const ElectionCreationTableContainer = () => {


    const elections = useSelector( state => state.elections);
    return(

        <div>   
            <h2>Table</h2>
            <ElectionCreationTable buttonText="Submit All Elections" elections={elections}/>; 
        </div>
    )
}