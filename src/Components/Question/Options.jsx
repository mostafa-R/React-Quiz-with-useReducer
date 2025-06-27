import React from 'react'

function Options({ question }) {
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} className="btn btn-option">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options
