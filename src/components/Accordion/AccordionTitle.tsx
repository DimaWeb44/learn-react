import React, { useReducer } from "react";

type AccordionTitlePropsType = {
    title: string
    click?: () => void
}

type ActionType = {
    type: 'CHANGE-SATE'
}
const reducer = (state: boolean, action: ActionType) =>{
    switch (action.type) {
        case 'CHANGE-SATE':
            return !state
    }
    return state
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    let [collapsed, dispatch] = useReducer(reducer,false);
    return (<>
        <h1 onClick={()=>dispatch({type:'CHANGE-SATE'})}>{props.title}</h1>
    </>);
}