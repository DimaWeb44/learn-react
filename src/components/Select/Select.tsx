import React, {useState} from "react";
import s from "./Select.module.css"

type  ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    items: ItemsType[]
    onClick: (value: any) => void
}
const Select = React.memo(SecretSelect)
function SecretSelect(props: SelectPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    let toggle = () => {
        setCollapsed(!collapsed)
    }
    let selectedItem = props.items.find(i => i.value === props.value)
    let onItemClick = (value: string) => {
        props.onClick(value)
        setCollapsed(!collapsed)
    }
    return <div className={s.select}>
        <div className={s.name} onClick={toggle}>{selectedItem && selectedItem.title} {collapsed ? '^' : "v"}</div>
        <div className={s.items}> {collapsed && props.items.map((i, index) => <div
            className={s.collapsed}
            key={index}
            onClick={() => {
                onItemClick(i.value)
            }}>
            {i.title}</div>)}</div>
    </div>
}

export default Select


