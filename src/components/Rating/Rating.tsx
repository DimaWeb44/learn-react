import React, {useState} from "react";

// type RatingPropsType = {
//     value: number
// }

export function Rating(props: any) {

    return (
        <div>
            <Star selected={props.value > 0} click={props.click} value={props.valueRating[0]}/> <br/>
            <Star selected={props.value > 1} click={props.click} value={props.valueRating[1]}/> <br/>
            <Star selected={props.value > 2} click={props.click} value={props.valueRating[2]}/> <br/>
            <Star selected={props.value > 3} click={props.click} value={props.valueRating[3]}/><br/>
            <Star selected={props.value > 4} click={props.click} value={props.valueRating[4]}/> <br/>
        </div>
    );
}

// type StarPropsType = {
//     selected: boolean
// }


function Star(props: any) {
debugger
    return <span onClick={() => {props.click(props.value)}}> { props.selected ? <b>star</b> : 'star' }</span>
}