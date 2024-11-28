import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
import { useState } from "react";

const CustomButton = ({ type, title, CustomStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const [showTooltip, setShowTooltip] = useState(false); // State to track tooltip visibility

  const generateStyle = (type) => {
    if (type == "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  // Function to handle hover and show the tooltip
  const handleHover = () => {
    if (title === "AI Logo" || title === "AI Full") {
      setShowTooltip(true); // Show "Oops" on hover
    }
  };

  // Function to hide tooltip when mouse leaves
  const handleLeave = () => {
    setShowTooltip(false); // Hide the tooltip
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${CustomStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
      onMouseEnter={handleHover} // Trigger hover
      onMouseLeave={handleLeave} // Trigger leave
    >
      {title}
      {/* Conditionally render the tooltip directly within the button */}
      {showTooltip && (title === "AI Full" || title === "AI Logo") && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-20 text-sm bg-gray-800 text-white rounded px-4 py-3">
          "If on pressing the button🤔, the below error generates in your
          terminal that is because your OpenAI api Key has reached its
          limitation. Either go with payment method of OpenAI or try with new
          api
          <strong className="text-red-500">
            &nbsp; KeyBadRequestError: 400 Billing hard limit has been reached.
            If the error mentioned here appears in backend server
          </strong>
        </span>
      )}
    </button>
  );
};

export default CustomButton;
