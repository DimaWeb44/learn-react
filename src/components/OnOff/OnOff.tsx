import React, {useState} from "react";
import s from './OnOff.module.css'



/*type PropsType = {
   on: boolean
}*/

export const OnOff = (props: any) => {
    const lampStyle ={

        backgroundColor: props.on ? "#29b92d" : "brown"
    }
    let onClickON = () => {props.setOn(true)}
    let onClickOFF = () => {props.setOn(false)}

    return (
        <div className={s.cub}>
            <div>
                <button className={s.on} onClick={onClickON}><h3>ON</h3></button>
            </div>
            <div>
                <button className={s.off} onClick={onClickOFF} ><h3>OFF</h3></button>
            </div>
            <div className={s.lamp1} style={lampStyle}></div>
        </div>
    )
}


