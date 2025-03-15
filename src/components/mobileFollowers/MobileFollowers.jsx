import React, { useState } from "react";
import "./MobileFollowers.css";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { LiaAtomSolid } from "react-icons/lia";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const MobileFollowers = () => {
  // Profile Info
  const [name, setName] = useState("Himanshu Choudhary");
  const [title, setTitle] = useState("Building Uniisphere | Masters Union");
  const [connections, setConnections] = useState(248);
  const [collabs, setCollabs] = useState(78);
  const [about, setAbout] = useState(
    "The actual idea of Uniisphere was of The Founder Himanshu who worked for months to think and plan all the essential stuff to make this an all-time success."
  );
  const [profileImg, setProfileImg] = useState(
    "https://th.bing.com/th/id/OIP.abbHwUGf7cWF1KrClYxa5AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  );

  // Collaborators

  const [collaboratorName] = useState("Jane Smith");
  const [education] = useState(["B.Tech in CS", "M.Tech in AI"]);
  const [subCollaborators] = useState(["Alice", "Bob", "Charlie"]);
  const [paragraph] = useState("Passionate about coding and problem-solving.");

  // Skills
  const [skills, setSkills] = useState([
    "Java",
    "C++",
    "Python",
    "Photoshop",
    "React",
    "JavaScript",
    "CSS",
    "HTML ",
    "Tailwind",
  ]);

  const [color, setcolor] = useState([
    "#fefae0",
    "#e9edc9",
    "#f4f1de",
    "#e9ecef",
    "#f8edeb",
  ]);
  // Buttons Text
  const [buttons, setButtons] = useState(["Masters Union", "SBM"]);

  return (
    <div className="mobile-followers-container">
      <div className="first-section">
        {/* Profile Header */}
        <div className="profile-header">
          <IoArrowBackCircleOutline className="back-button" />
          <button className="connect-button">+ CONNECT</button>
        </div>

        {/* Profile Info */}

        <div className="profile-main">
          <div className="connections-and-collabs">
            <div className="connections">
              <h5>{connections}</h5>
              <h3>Connections</h3>
            </div>
            <div className="collabs">
              <h5>{collabs}</h5>
              <h3>Collabs</h3>
            </div>
          </div>
          <div className="image-section">
            <img src={profileImg} alt="" />
          </div>
        </div>

        {/* Name and position section */}
        <div className="name-and-work">
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
        {/* buttons  section */}

        <div className="all-buttons">
          {buttons.map((btn, index) => (
            <button key={index} className="single-btn">
              {btn}
            </button>
          ))}
        </div>
      </div>
      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>{about}</p>
      </div>

      {/* Collabs Section */}
      <div className="collab-section">
        <div className="heading">
          <h3>Collabs</h3>
        </div>
        <div className="collab-lower-part">
          <div className="collab-left">
            <div className=" collabratorCard ">
              <div className="collab-image ">
                <img src={profileImg} alt="" />
              </div>
              <div className="collabratorDetails">
                <h4>{collaboratorName}</h4>
                <div className="education">
                  {education.map((val, index) => (
                    <h6 key={index}>{val}</h6>
                  ))}
                </div>
                <div className="subCollabrators">
                  (
                  {subCollaborators.map((val, index) => (
                    <h6 key={index}>{val},</h6>
                  ))}
                  )
                </div>
              </div>
            </div>
            <div className="para">
              <p>{paragraph}</p>
            </div>
          </div>
          <div className="collab-right">
            <div className="iconAndImage">
              <img src={profileImg} alt="" />
              <RiArrowDropRightLine
                className="
              paragrapgh-icon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section  */}
      <div className=" skills-section ">
        <h3>Skills</h3>
        <div className=" skill-list ">
          {skills.map((val, index) => (
            <div
              key={index}
              style={{ backgroundColor: color[index % color.length] }}
              className="skillsMiniDiv"
            >
              {val}
            </div>
          ))}
        </div>
        {/* Privacy Section */}
        <div className="privacy-section">
          <div className="lock-icon">
            <IoLockClosedOutline className="lock" />
          </div>
          <p className="privacy-text">Do you know privacy?</p>
          <p className="connect-text">Connect to explore further.</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <FaHome className="nav-icon" />
        <IoNotificationsOutline className="nav-icon" />
        <CiCirclePlus className="nav-icon" />
        <MdGroups className="nav-icon" />
        <LiaAtomSolid className="nav-icon" />
      </div>
    </div>
  );
};

export default MobileFollowers;
