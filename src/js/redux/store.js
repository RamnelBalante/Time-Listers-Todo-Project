/* 
 STORE
        createStore()
        getStore()

        store = []
*/

let store = null;
// create store
const createStore = function(data=[]){
    if(store === null){
        // creating the data store for the application
        store = [... data]
    }
}
// access the store
const getStore  = function (){
    return store
}

const updateStore = function (newState){
    store = [...newState]
}

export {createStore, getStore, updateStore}