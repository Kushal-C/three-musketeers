
import { ElectionCreationFormConatiner } from '../containers/ElectionCreationFormContainer'
import { ElectionCreationTableContainer} from '../containers/ElectionCreationTableContainer'

export const ElectionCreation = () => {
    return (
        <>
            <h1>ElectionCreation</h1>
            <ElectionCreationTableContainer />
            <ElectionCreationFormConatiner />
        </>
    );
}