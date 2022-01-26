import React, {useReducer} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody, ItemsType} from "./AccordionBody";
import { reducer } from "./Reducer";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    click: () => void
    items: ItemsType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    let [state, dispatch] = useReducer(reducer,{collapsed: false});
    return (<div>
        <AccordionTitle title={props.titleValue} click={()=>dispatch({type:'CHANGE-SATE'})}/>
        {!state.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>)
}

export default Accordion