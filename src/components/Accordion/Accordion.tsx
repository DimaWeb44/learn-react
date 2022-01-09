import React, {useState} from "react";

// type AccordionPropsType = {
//     titleValue: string
//     collapsed: boolean
// }

type AccordionTitlePropsType = {
    title: string
    click: ()=> void
}


function Accordion(props: any) {


        return (<div>
            <AccordionTitle title={props.titleValue} click={props.click}/>
            {!props.collapsed && <AccordionBody title={props.titleValue}/>}
        </div>)}



function AccordionTitle(props: AccordionTitlePropsType) {
    return (<>
        <h1 onClick={props.click}>{props.title}</h1>
    </>);
}

function AccordionBody(props: any) {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
}

export default Accordion