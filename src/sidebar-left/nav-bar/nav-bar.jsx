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
        <div className="w-1/3 px-8">
            <nav>
                <br />
                <Avatar />
                <br />
                <NavLink to="/"><Home /></NavLink>
                <br />
                <NavLink to="/explore"><Explore /></NavLink>
                <br />
                <NavLink to="/messages"><Messages /></NavLink>
                <br />
                <NavLink to="/home"><Bookmarks /></NavLink>
                <br />
                <NavLink to="/notifications"><Notifications /></NavLink>
                <br />
                <NavLink to="/lists"><Lists /></NavLink>
                <br />
                <NavLink to="/profile"><Profile /></NavLink>
                <br />
                <NavLink to="/more"><More /></NavLink>

                <br />
            </nav>
            <button className="bg-sky-500 h-8 w-24 rounded-full">Tweet</button>
            <Footersiderbar />
        </div>
    );
}

export default NavBar;

