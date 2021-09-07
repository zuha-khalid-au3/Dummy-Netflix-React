import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="" alt="Logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search />
          <span>KID</span>
          <Notifications className="icon" />
          <img src="" alt="Notif" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
