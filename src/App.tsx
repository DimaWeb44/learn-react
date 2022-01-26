import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff/OnOff'
import {Rating} from "./components/Rating/Rating";
import Select from "./components/Select/Select";




function App() {
    let users = [{title:'Dima', value:'1'}, {title:'Max', value:'2'},{title:'Oleg', value:'3'},{title:'Valera', value:'4'}]
    let [value, setValue] = useState(0)
    let [select, setSelect] = useState('1')
    const onClickSelect = (value:string) => setSelect(value)
    let valueRating = [1,2,3,4,5]
    const click = () => setCollapsed(!collapsed)
    let [collapsed, setCollapsed] = useState(false);
    let[on, setOn] = useState(true)
    return (
        <div className={"App"}>
            <Accordion titleValue = {"Menu"} collapsed = {collapsed} click={click} items={users} onClick={(value)=>{alert(value)}}/>
            <OnOff on={on} setOn={setOn} />
            <Rating value={value} click={setValue} valueRating={valueRating}/>
            <Select value={select} items={users} onClick={onClickSelect}/>
        </div>
    );
}

export default App;
