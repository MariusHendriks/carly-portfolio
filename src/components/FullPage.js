import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className="section">
                        <div class="slide">Slide 2.1</div>
                        <div class="slide">Slide 2.2</div>
                        <div class="slide">Slide 2.3</div>
                    </div>
                    <div className="section">
                        <p>Section 3</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;
