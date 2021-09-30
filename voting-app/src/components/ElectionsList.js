//Reuse Grigor's table
import { Link } from "react-router-dom"
export const ElectionsList = ({elections}) => {
    
    return (
        <ul>
            {
                elections.map(election => {
                    return (
                        <li key={election.id}>
                            <Link
                                to='/vote'
                                state={{ election: election }}
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