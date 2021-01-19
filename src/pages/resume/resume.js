import React from 'react';
import ben from "../../pdf/Ben-Gardner-Professional-Resume.pdf"
import './resume.css';

function Resume() {
    return(
        <div className="image">
            <div className="container">
                <div className="pdf">
                    <embed src={ben} type="application/pdf"/>
                </div>
            </div>
        </div>
    )
}

export default Resume;