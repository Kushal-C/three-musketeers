
import { ElectionCreationFormConatiner } from '../containers/ElectionCreationFormContainer'
import { ElectionCreationTableContainer} from '../containers/ElectionCreationTableContainer'



export const ElectionCreation = ({ voters: initialElections }) => {
    //Create Form
    //Create Tables
    //create view row
    return (
        <>
            <h1>ElectionCreation</h1>
            <ElectionCreationTableContainer />
            <ElectionCreationFormConatiner initialVoters={initialElections}/>
        </>
    );
}