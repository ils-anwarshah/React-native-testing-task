import {put, takeEvery} from 'redux-saga/effects'
import { FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_SUCCESS } from '../redux/ConstData/const';


function* Photos(){
    try{
        const url = "http://10.0.2.2:3000/users"
        let data = yield fetch(url)
         yield data = data.json()
        //  console.log(data);
        yield put({type:FETCH_DATA_SUCCESS,payload:data})
    }
    catch(e){
        yield put({type:FETCH_DATA_FAILED,payload:e})
    }
  
    
   
}
function* FetchUserData(){
    yield console.log("Hello I am SAGA PAGA");
}

function* FetchPhotos(){
    yield takeEvery(FETCH_DATA,Photos)
}


export default FetchPhotos