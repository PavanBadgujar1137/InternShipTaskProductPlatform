import React, { useState } from "react";

const ShowMoreText = ({ text, maxLength }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <p>
        {showMore ? text : `${text.slice(0, maxLength)}...`}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={toggleShowMore}
        >
          {showMore ? " Show Less" : " Show More"}
        </span>
      </p>
    </div>
  );
};

export default ShowMoreText;
