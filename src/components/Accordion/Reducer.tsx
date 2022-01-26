
export type ActionType = {
    type: 'CHANGE-SATE'
}

 export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case 'CHANGE-SATE':
            return {...state,
                collapsed: !state.collapsed}
        default:
            throw new Error("Bad action type")
    }

}