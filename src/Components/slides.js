import React, { useState } from "react";

import './slides.css';

function Slides() {
  const [slides, setSlides] = useState(0);
  return (
    <div>
    <div id="navigation" className="text-centre">
      <button
        data-testid="button-restart"
        className={slides === 0 ? "small outlines" : "small"}
        disabled={slides === 0}
        onClick={() => setSlides(0)}
      >
        Restart
      </button>

      <button
        data-testid="button-prev"
        className={slides === 0 ? "small outlines" : "small"}
        disables={slides === 0}
        onClick={() => setSlides(slides - 1)}
      >
        Prev
      </button>

      <button
        data-testid="button-next"
        className={
          slides === slides.length - 1 ? "small outlined" : "small"
        }
        disabled={slides === slides.length - 1}
        onClick={() => setSlides(slides + 1)}
      >
        Next
      </button>
      </div>

      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slides].title}</h1>
        <p data-testid="text">{slides[slides].text}</p>
      </div>
    </div>
    
  );
}

export default Slides;
