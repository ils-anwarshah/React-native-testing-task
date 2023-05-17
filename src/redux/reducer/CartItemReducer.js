
const initialState=[]

export default function CartItemReducer(state = initialState,action){
    switch (action.type) {
        case "ADD_TO_CART":
            const item = state.find(
                product => product.index === action.payload.index
            );
            if (item){
                return (
                    state.map(
                        (item)=> {
                            if (item.index === action.payload.index) {
                                return {
                                    ...item,
                                    quantity: item.quantity+1,
                                }
                            } else {
                                return item;
                            }
                        }
                    )
                )
            }
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
