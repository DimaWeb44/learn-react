import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff'
import {Rating} from "./components/Rating/Rating";

function App() {
    let [value, setValue] = useState(0)
    let valueRating = [1,2,3,4,5]
    const click = () => setCollapsed(!collapsed)
    let [collapsed, setCollapsed] = useState(false);
    let[on, setOn] = useState(true)
    return (
        <div className={"App"}>
            <Accordion titleValue = {"Menu"} collapsed = {collapsed} click={click}/>
            <OnOff on={on} setOn={setOn} />
            <Rating value={value} click={setValue} valueRating={valueRating}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle (props: PageTitlePropsType){
    return <h1>{props.title}</h1>;
}

export default App;
