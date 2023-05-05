
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
                return item.title != action.payload.title
            })
            return result
        default:
            return state
    }
}
