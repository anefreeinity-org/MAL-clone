import { useNavigate } from "react-router-dom";
import { profileTabs } from "../pages/profile/profiletabs.jsx";

const Sidebar = () => {
  const navigate = useNavigate();

  const handelPageDetails = (path) => {
    navigate(`/profile/${path}`)
  }

  return (
    <div className="w-1/6 h-screen bg-gray-900 mt-20">
      <ul>
        {profileTabs.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => handelPageDetails(val.path)}
              className={`flex flex-row text-white cursor-pointer hover:bg-gray-700 ${
                window.location.pathname == val.path ? "bg-gray-700" : ""
              }`}
            >
              <div >
                <div className="">{val.title_sidebar}</div>
                <div className="">{val.episodes}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
