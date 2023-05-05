import { View, Text } from 'react-native'
import React from 'react'

const initialState = {
    item_count:0,
};
export default function CartCountReducer(state = initialState,action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                item_count : state.item_count + 1

            }
        case 'REMOVE_TO_CART':
            return {
                ...state,
                item_count : state.item_count - 1
                
            }
        default:
            return state;
           
    }
  
}