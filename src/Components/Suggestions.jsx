import React from "react";

const Suggestions = ({ score }) => {
  let suggestions = [];

  if (score < 40) {
    suggestions = ["Add skills", "Improve formatting", "Use keywords"];
  } else if (score < 70) {
    suggestions = ["Add projects", "Improve experience", "Use action verbs"];
  } else {
    suggestions = ["Good resume", "Add certifications", "Keep updating"];
  }

  return (
    <div className="suggestion-box">
      <h3>Suggestions:</h3>
      <ul>
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;