
const initialState=[]

export default function CartItemReducer(state = initialState,action){
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                action.payload
            ]
        case "REMOVE_TO_CART":
            let result = state.filter((item)=>{
                return item.index != action.payload.index
            })
            return result
        default:
            return state
    }
}
