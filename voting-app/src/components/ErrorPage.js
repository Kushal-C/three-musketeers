import { Link } from "react-router-dom"
export const ErrorPage = () => {
    return (
        <>
            <h3 className="errorText">Sorry you can't vote on this Election :(</h3>
            <Link to="/capture-votes">
                Use this Link to go back to the homepage
            </Link>
        </>
    )
}