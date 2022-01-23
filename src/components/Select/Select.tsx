import React, {useState} from "react";

type  ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    items: ItemsType[]
    onClick: (value: any) => void
}

function Select(props: SelectPropsType) {
let [collapsed, setCollapsed]=useState(false)
    return <div>
       <div onClick={()=>setCollapsed(!collapsed)}>{props.value}</div>
            {collapsed && props.items.map((i, index) => <div
                key={index}
                onClick={() => {props.onClick(i.title)}}>
                {i.title}</div>)}
    </div>
}
export default Select


