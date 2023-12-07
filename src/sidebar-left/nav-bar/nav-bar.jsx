import { NavLink } from "react-router-dom";
import Bookmarks from "../left-bookmarks";
import Explore from "../left-explore";
import Lists from "../left-lists";
import Messages from "../left-messages";
import Notifications from "../left-notifications";
import Avatar from "../left-avatar";
import More from "../left-more";
import Profile from "../left-profile";
import Home from "../left-home";
import Footersiderbar from "../footersiderbar";


// import './App.css'
// import '.navbar.css'

function NavBar() {
    return (
        <>
            <nav>
                <br />
                <Avatar />
                <br />
                <NavLink to="/"><Home /></NavLink>
                <br />
                <NavLink to="/products"><Explore /></NavLink>
                <br />
                <NavLink to="/basua"><Messages /></NavLink>
                <br />
                <NavLink to="/home"><Bookmarks /></NavLink>
                <br />
                <NavLink to="/fndfjj"><Notifications /></NavLink>
                <br />
                <NavLink to="/about"><Lists /></NavLink>
                <br />
                <NavLink to="/profile"><Profile /></NavLink>
                <br />
                <NavLink to="/hjgfj"><More /></NavLink>

                <br />
            </nav>
            <button className="button-accueil">Tweet</button>
            <Footersiderbar />
        </>
    );
}

export default NavBar;

