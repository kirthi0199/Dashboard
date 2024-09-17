import React, {useEffect} from "react";
import "./Sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SpeedIcon from "@mui/icons-material/Speed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import SettingsIcon from "@mui/icons-material/Settings";
import HardwareIcon from '@mui/icons-material/Hardware';
import  ReactGA from "react-ga4";
import { Link } from "react-router-dom";

const Sidebar = () => {
  
useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}, []);
  const handleHardwareIconClick = () => {
    // Log the event to Google Analytics
    ReactGA.event({
      category: 'User Interaction',  // Custom category
      action: 'Click on Hardware Icon',  // Custom action
      label: 'Hardware Page Navigation'  // Optional label
    });
  };
  const handleSettingIconClick = () => {
    // Log the event to Google Analytics
    ReactGA.event({
      category: 'User Interaction',  // Custom category
      action: 'Click on Setting Icon',  // Custom action
      label: 'setting Page Navigation'  // Optional label
    });
  };
  return (
    <div className="zuppa-sidebar">
   
      <br />
      <br />
      <div className="paragraph-icon">
        <p>
          <PersonIcon color="success" fontSize="large" />
        </p>
        <p>
          <NotificationsActiveIcon />
        </p>
        <p>
          <SpeedIcon />
        </p>
        <Link to="/mapdevice">
          <p>
            <LocationOnIcon />
          </p>
        </Link>
        <p>
          <EventNoteIcon />
        </p>
        <p>
          <DonutSmallIcon />
        </p>
        <p onClick={handleSettingIconClick} style={{ cursor: 'pointer' }}>
  <SettingsIcon />
</p>
       

        <Link to="/hardware" onClick={handleHardwareIconClick}>
        <p>
          <HardwareIcon />
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
