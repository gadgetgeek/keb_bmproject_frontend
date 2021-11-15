import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div className="header">Bookmarks App</div>
            </Link>
        </nav>
    )
}

export default Header;