import {takeEvery} from 'redux-saga/effects'
import axios from 'axios';


function* Photos(){
    const url = "https://jsonplaceholder.typicode.com/photos"
    axios.get(url)
    .then(res=>{
        console.log(res)
    })
    
}
function* FetchUserData(){
    yield console.log("Hello I am SAGA PAGA");
}


export { FetchUserData,Photos}