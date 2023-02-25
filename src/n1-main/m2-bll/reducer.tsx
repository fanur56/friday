
const initialState = {}

export const someReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "SOME-TYPE": {
            return state
        }
        default: {
            return state
        }
    }
}

export const someAC = () => ({
    type: "SOME-TYPE"
}) as const

// types
type InitialStateType = typeof initialState

export type AppActionType = ReturnType<typeof someAC>