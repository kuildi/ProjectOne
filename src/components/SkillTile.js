import React from 'react'

export default function SkillTile(props) {
    return (
        <div className="skill-tile">
            <div className={"icon " + props.iconClass}></div>
            <p>{props.children}</p>
        </div>
    );
}