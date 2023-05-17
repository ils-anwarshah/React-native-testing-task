import PhotoScreen from '../../component/PhotoScreen'
import * as type from '../ConstData/const'
const initialState={
    loading :true,
    PhotoData : [],
    error: null
}

export default function FetchPhotoReducer(state = initialState,action){
    
    switch (action.type) {
        case type.FETCH_DATA:
            return state
        case type.FETCH_DATA_SUCCESS:
            console.log("Saga Data Loaded Successfully");
            return {...state,
                loading:false,
                PhotoData : action.payload
            }
        case type.FETCH_DATA_FAILED:
            console.log("Saga Data faild to load");
            return{
                ...state,
                loading:true,
                error: action.payload
            }
        default:
            return state
    }
    
}
