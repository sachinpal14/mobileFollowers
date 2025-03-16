import React, { useState } from "react";
import "./MobileFollowers.css";
import connect from '../../assets/Connect.png'
import { RiArrowDropRightLine } from "react-icons/ri";
 
import { IoLockClosedOutline } from "react-icons/io5";
 
import { IoArrowBackCircleOutline } from "react-icons/io5";
const MobileFollowers = () => {
  // Profile Info
  const [name, setName] = useState("Himanshu Choudhary");
  const [title, setTitle] = useState("Building Uniisphere | Masters Union");
  const [connections, setConnections] = useState(248);
  const [collabs, setCollabs] = useState(78);
  const [paragraph, setParagraph] = useState(
    "The actual idea of Uniisphere was of The Founder Himanshu who worked for months to think and plan all the essential stuff to make this an all-time success."
  );
  const [profileImg, setProfileImg] = useState(
    "https://th.bing.com/th/id/OIP.abbHwUGf7cWF1KrClYxa5AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  );

  // Collaborators

  const [collaboratorName] = useState("Jane Smith");
  const [education] = useState(["B.Tech in CS", "M.Tech in AI"]);
  const [subCollaborators] = useState(["Alice", "Bob", "Charlie"]);
  const [fullAboutText] = useState(
    "Passionate developer with experience in web and mobile development. I specialize in React, Node.js, and building scalable applications. Love to work on open-source projects and contribute to the tech community."
  );

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
  // about functionality 

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const maxLength = 100;
 
  const displayedText = isExpanded
    ? fullAboutText
    : fullAboutText.slice(0, maxLength) +
      (fullAboutText.length > maxLength ? "..." : "");

  return (
    <div className="mobile-followers-mobile-followers-container-privacy">
  <div className="mobile-followers-first-section-privacy">
    {/* Profile Header */}
    <div className="mobile-followers-profile-header-privacy">
      <IoArrowBackCircleOutline className="mobile-followers-back-button-privacy" />
      <img className="mobile-followers-connect-button-privacy" src={connect} alt="" />
    </div>

    {/* Profile Info */}
    <div className="mobile-followers-profile-main-privacy">
      <div className="mobile-followers-connections-and-collabs-privacy">
        <div className="mobile-followers-connections-privacy">
          <h5>{connections}</h5>
          <h3>Connections</h3>
        </div>
        <div className="mobile-followers-collabs-privacy">
          <h5>{collabs}</h5>
          <h3>Collabs</h3>
        </div>
      </div>
      <div className="mobile-followers-image-section-privacy">
        <img src={profileImg} alt="" />
      </div>
    </div>

    {/* Name and position section */}
    <div className="mobile-followers-name-and-work-privacy">
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
    {/* buttons section */}
    <div className="mobile-followers-all-buttons-privacy">
      {buttons.map((btn, index) => (
        <button key={index} className="mobile-followers-single-btn-privacy">
          {btn}
        </button>
      ))}
    </div>
  </div>
  {/* About Section */}
  <div className="mobile-followers-about-section-privacy">
    <h3>About</h3>
    <div className="mobile-followers-about-para-section-privacy">
      <p>
        {displayedText}
        <span>
          {fullAboutText.length > maxLength && (
            <button className="mobile-followers-about-button-privacy" onClick={toggleExpand}>
              {isExpanded ? "See Less" : "See More"}
            </button>
          )}
        </span>
      </p>
    </div>
  </div>

  {/* Collabs Section */}
  <div className="mobile-followers-collab-section-privacy">
    <div className="mobile-followers-heading-privacy">
      <h3>Collabs</h3>
    </div>
    <div className="mobile-followers-collab-lower-part-privacy">
      <div className="mobile-followers-collab-left-privacy">
        <div className="mobile-followers-collabratorCard-privacy">
          <div className="mobile-followers-collab-image-privacy">
            <img src={profileImg} alt="" />
          </div>
          <div className="mobile-followers-collabratorDetails-privacy">
            <h4>{collaboratorName}</h4>
            <div className="mobile-followers-education-privacy">
              {education.map((val, index) => (
                <h6 key={index}>{val}</h6>
              ))}
            </div>
            <div className="mobile-followers-subCollabrators-privacy">
              (
              {subCollaborators.map((val, index) => (
                <h6 key={index}>{val},</h6>
              ))}
              )
            </div>
          </div>
        </div>
        <div className="mobile-followers-para-privacy">
          <p>{paragraph}</p>
        </div>
      </div>
      <div className="mobile-followers-collab-right-privacy">
        <div className="mobile-followers-iconAndImage-privacy">
          <img src={profileImg} alt="" />
          <RiArrowDropRightLine className="mobile-followers-paragrapgh-icon-privacy" />
        </div>
      </div>
    </div>
  </div>

  {/* Skills Section */}
  <div className="mobile-followers-skills-section-privacy">
    <h3>Skills</h3>
    <div className="mobile-followers-skill-list-privacy">
      {skills.map((val, index) => (
        <div
          key={index}
          style={{ backgroundColor: color[index % color.length] }}
          className="mobile-followers-skillsMiniDiv-privacy"
        >
          {val}
        </div>
      ))}
    </div>
    {/* Privacy Section */}
    <div className="mobile-followers-privacy-section-privacy">
      <div className="mobile-followers-lock-icon-privacy">
        <IoLockClosedOutline className="mobile-followers-lock-privacy" />
      </div>
      <p className="mobile-followers-privacy-text-privacy">Do you know privacy?</p>
      <p className="mobile-followers-connect-text-privacy">Connect to explore further.</p>
    </div>
  </div>
</div>
  );
};

export default MobileFollowers;
