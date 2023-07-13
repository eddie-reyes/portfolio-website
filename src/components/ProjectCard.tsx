import React, { useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';

interface Props {
    header: string;
    image: string;
    description: string;
    hyperlink: string;
    toolTipDescription: string;
}

const ProjectCard = ({ header, image, description, hyperlink, toolTipDescription }: Props) => {
    const toolTipRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const tooltip = new Tooltip(toolTipRef.current as Element, {
            title: toolTipDescription,
            placement: 'bottom',
            trigger: 'hover',
        });
    });

    return (
        <div className="card text-white bg-dark project">
            <h2 className="card-header bg-gradient">{header}</h2>
            <div className="card-body">
                <img className=" w-50 mb-3 rounded" src={image} />
                <p className="card-text">{description}</p>
                <button type="button" className="btn btn-primary" ref={toolTipRef}>
                    <a className="link-light text-decoration-none" href={hyperlink}>
                        Play Now
                    </a>
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
