import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import startupImage from "../images/startep.png";
import { CiCircleInfo } from "react-icons/ci";
import "../components/Body.css";
import { GrView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import ShowMoreText from "./ShowMoreText ";
import { RiMessage2Line } from "react-icons/ri";
import mainImage from "../images/mainImage.png";
import { AiOutlineLike } from "react-icons/ai";
import noteImage from "../images/note.png";
import { useState, useEffect, useRef } from "react";
import contactImage from "../images/contact.png";
import writenote from "../images/writenote.png";
import shareImage from "../images/share.png";
import flagImage from "../images/flag.png";

const Body = () => {
  const longText =
    "Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi.... Show moreLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec justo vel justo condimentum euismod.";

  const [open, setOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const handleItemClick = (form) => {
    setOpen(!open);
    setSelectedForm(form);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="body">
      <div className="arrowleft">
        <div className="arrowicon">
          <FaArrowLeft />
        </div>
        <div className="arrowheading">Back to Questions</div>
      </div>

      {/* Main Body Part */}

      <div className="mainbody">
        <div className="nav">
          <div className="leftmainpart">
            <div className="mainfield">Design</div>
            <div className="mainfield">Technology</div>
          </div>
          <div>
            <img
              height={"50px"}
              width={"60px"}
              src={startupImage}
              alt="startupImage"
            />
          </div>
        </div>

        {/* text part */}
        <div className="textpart">
          <div className="midtext">
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup?{" "}
          </div>
          <div className="largetext">
            Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
            viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
            donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
            magna cursus se?{" "}
          </div>
        </div>

        {/* footer main 1st  */}
        <div className="footline">
          <div className="foot">
            <div className="iconsfoot">
              <GrView />
            </div>
            <div>100 Views</div>
          </div>

          <div className="foot">
            <div className="iconsfoot">
              <CiCircleInfo />
            </div>
            <div>How should you word your answer?</div>
          </div>
        </div>
      </div>

      {/* Answer line */}

      <div className="answerline">
        <div>Answers (23)</div>
        <div className="sortby">
          <div>Sort By:</div>

          <select className="dropdownwhile">
            <option className="optionswhite" value="popular">
              Populars
            </option>

            <option value="vegetable">Explore</option>

            <option value="meat">Meat</option>
          </select>
        </div>
      </div>

      {/* second main  */}

      <div className="mainbody">
        <div className="navmainsecond">
          <div className="firstpartName">
            <img src={mainImage} alt="mainImage" />
            <div>
              <div className="nehabhat">
                Neha Bhat <span className="you">(You)</span>
              </div>
              <div className="date">Jun 27, 2023</div>
            </div>
          </div>

          <div className="editpart">
            <AiFillEdit />

            <div>Edit</div>
          </div>
        </div>

        <div className="textpart moretext">
          <ShowMoreText text={longText} maxLength={500} />
        </div>

        <div className="messagepostsection menu-container" ref={menuRef}>
          <div className="likeicon">
            <AiOutlineLike />
            <div>Like</div>
          </div>

          <div className="likeicon messageicon">
            <RiMessage2Line />

            <input
              type="text"
              placeholder="Add a Comment "
              className="inputfield"
            />
            <button className="messageicon likeicon">Post</button>
          </div>

          <div
            className="noteImage menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={noteImage} alt="noteImage" />
          </div>

          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <ul>
              <DropdownItem
                text="Contact Us"
                image={contactImage}
                onClick={() => handleItemClick("contact")}
              />
              <DropdownItem
                text="Give Suggestion"
                image={writenote}
                onClick={() => handleItemClick("suggestion")}
              />
              <DropdownItem
                text="Share Feedback"
                image={shareImage}
                onClick={() => handleItemClick("feedback")}
              />
              <DropdownItem
                text="Report an Issue"
                image={flagImage}
                onClick={() => handleItemClick("issue")}
              />
            </ul>
            {/* Render the selected form based on the state */}
            {selectedForm && (
              <FormComponent
                formType={selectedForm}
                onClose={() => setSelectedForm(null)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem" onClick={props.onClick}>
      {props.icon && <span className="icon">{props.icon}</span>}{" "}
      {props.image && <img src={props.image} alt="DropdownImage" />}
      <span>{props.text}</span>
    </li>
  );
}
// Example FormComponent
function FormComponent({ formType, onClose }) {
  return (
    <div className="form-container">
      <h2>{formType} Form</h2>
      {formType === "contact" && <ContactForm />}
      {formType === "suggestion" && <SuggestionForm />}
      {formType === "feedback" && <FeedbackForm />}
      {formType === "issue" && <IssueForm />}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

// Example individual form components
function ContactForm() {
  return <div className="form">{/* Fields for the contact form */}</div>;
}

function SuggestionForm() {
  return (
    <div className="form">
      {/* Fields for the suggestion form */}
      <label>Suggestion:</label>
      <textarea />
      {/* Add more fields as needed */}
    </div>
  );
}

function FeedbackForm() {
  return (
    <div className="form">
      {/* Fields for the feedback form */}
      <label>Feedback:</label>
      <textarea />
      {/* Add more fields as needed */}
    </div>
  );
}

function IssueForm() {
  return (
    <div className="form">
      {/* Fields for the issue report form */}
      <label>Issue Description:</label>
      <textarea />
      {/* Add more fields as needed */}
    </div>
  );
}

export default Body;
