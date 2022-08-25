import React from 'react'
import '../css/FlowerCardContainer.css'
import reactImage from '../../public/images/react.jpg'
const FlowerCardContainer = () => {
  return (
    <div className="card-container">
        {/* <div className="card">
            <div className="card-part"></div>
            <div className="card-part"></div>
            <div className="card-part"></div>
            <div className="card-part"></div>
            <button className="learn-more">Learn More</button>
        </div> */}
        <div className="tabs">
            <input type="radio" name="stack" id="html" defaultChecked></input>
            <input type="radio" name="stack" id="mui"></input>
            <input type="radio" name="stack" id="react"></input>
            <input type="radio" name="stack" id="node"></input>
            <nav className="tabs-button-container">
                <label className="tabs-button" htmlFor="html">HTML</label>
                <label className="tabs-button" htmlFor="mui">MUI</label>
                <label className="tabs-button" htmlFor="react">REACT</label>
                <label className="tabs-button" htmlFor="node">NODE</label>
            </nav>
            <div className="tabs-content">
                <div className="tabs-content-tab tab-1">
                    <h3>HTML</h3>
                    <p>Clean Markup, SEO friendly using the latest HTML5 principles. JSX using mui elements</p>
                </div>
                <div className="tabs-content-tab tab-2">
                    <h3>CSS</h3>
                    <p>Reusable CSS both in vanilla and using MUI. Comfortable with SASS preprocessor, styled components using the emotion styling enginge. Animations both in vanilla CSS and with the GSAP library. Clean and reusable code </p>
                </div>
                <div className="tabs-content-tab tab-3">
                    <h3>REACT</h3>
                    <p>React enjoyer using the latest version. React 18 with hooks and state managemenr using useReducer and React Context (Redux as well),React Router and various packages associated with building UIs (Swiper.js)</p>
                </div>
                <div className="tabs-content-tab tab-4">
                    <h3>NODE</h3>
                    <p>Backend built with the help of Express and various packages like jwt,validator and many more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlowerCardContainer