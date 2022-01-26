import React from "react"
import {reducer, StateType } from "./Reducer"

test("test reducer", () => {
    let state: StateType = {collapsed: false}
const  newState = reducer(state,{type:'CHANGE-SATE'})

    expect(newState.collapsed).toBe(true)
})