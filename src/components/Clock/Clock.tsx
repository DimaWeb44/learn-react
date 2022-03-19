import React, {FC, useEffect, useState} from "react"

type PropsType = {}
const Util = (nam: number) => nam < 10 ? "0" + nam : nam
export const Clock: React.FC<PropsType> = (props: PropsType) => {
    let [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <div>
        <span>{Util(date.getHours())}</span>
        :
        <span>{Util(date.getMinutes())}</span>
        :
        <span>{Util(date.getSeconds())}</span>

    </div>

}