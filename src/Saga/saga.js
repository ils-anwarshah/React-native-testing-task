import {takeEvery} from 'redux-saga/effects'

async function* FetchUserData(action){

    try{
        let url = 'https://jsonplaceholder.typicode.com/users'
        let result = await fetch(url)
        result = await result.json()
        yield put({type:"USER_FETCH_SUCCEEDED", payload:result})
    }
    catch(e){
        yield put({type:"USER_FETCH_FAILED",payload:result})
    }
}

function* MainSaga(){
    yield takeEvery('USER_FETCH_REQUEST', FetchUserData)
}

export default MainSaga