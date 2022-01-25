import React, { useReducer } from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody, ItemsType} from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    click: () => void
    items: ItemsType[]
    onClick: (value: any) => void
}





function Accordion(props: AccordionPropsType) {
    return (<div>
        <AccordionTitle title={props.titleValue} click={props.click}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>)
}

export default Accordion