import React from "react";

type AccordionTitlePropsType = {
    title: string
    click: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (<>
        <h1 onClick={props.click}>{props.title}</h1>
    </>);
}