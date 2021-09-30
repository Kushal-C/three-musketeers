import { Link } from "react-router-dom"
export const ErrorPage = () => {
    return (
        <>
            <div>Sorry you can't vote on this Election</div>
            <Link to="/capture-votes">
                Use this Link to go back to the homepage
            </Link>
        </>
    )
}