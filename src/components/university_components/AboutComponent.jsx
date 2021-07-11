import React from "react";

const AboutComponent = ({university}) => {
    return (
        <div className="university--component bg-white mb-30">
            <div className="row program--description">
                <h3 className={'font-weight--bold'}>About</h3>
                <div dangerouslySetInnerHTML={{__html: university.detail}}></div>
                <a className={"mt-3"} href={'#'}>Read more</a>
            </div>
        </div>
    )
}

export default AboutComponent;
