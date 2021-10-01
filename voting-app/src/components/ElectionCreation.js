
import { ElectionCreationFormConatiner } from '../containers/ElectionCreationFormContainer'
import { ElectionCreationTableContainer} from '../containers/ElectionCreationTableContainer'

export const ElectionCreation = () => {
    return (
        <div style={{'marginTop':'80px'}}>
            <h1>ElectionCreation</h1>
            <ElectionCreationTableContainer />
            <ElectionCreationFormConatiner />
        </div>
    );
}