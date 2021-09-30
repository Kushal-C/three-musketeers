//Reuse Grigor's table
import { Link } from "react-router-dom"
export const ElectionsList = ({elections, onSetActiveElection: setActiveElection}) => {
    return (
        <ul>
            {
                elections.map(election => {
                    return (
                        <li key={election.id}>
                            <Link
                                to='/vote'
                                onClick={() => setActiveElection(election)}
                            >
                                {election.name}
                            </Link> 
                        </li>
                    );
                })
            }
        </ul>
    )
}