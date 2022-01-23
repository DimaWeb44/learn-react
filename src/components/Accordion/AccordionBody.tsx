import React from "react";

export type  ItemsType = {
    title: string
    value: any
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {

    return <div>
        <ul>
            {props.items.map((i, index) => <li
                key={index}
                onClick={() => {props.onClick(i.value)}}>
                {i.title}</li>)}
        </ul>
    </div>
}