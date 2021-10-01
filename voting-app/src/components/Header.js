import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <header>
             <Link to="/voter-creation" className="headerItems">Register to Vote</Link>
             <Link to="/election-creation" className="headerItems">Create an Election</Link>
             <Link to="/capture-votes" className="headerItems">Vote in an election</Link>
        </header>
    )
}