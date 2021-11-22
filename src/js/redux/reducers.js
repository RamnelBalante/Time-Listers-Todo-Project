
/* 
       Stratagy for managin data.
       MVC

             Store (data) Model

             Control Reducer
             action- what do you want to do to the store
                   - add
                     action.type = "add"
                   - edit
                     action.type = "edit"
                     reducer will add the edit object to the store
                   - delete
             payload
              data to perform the action
              action.type = "edi"
              find the employee by the key
              replace the existing data with the new data paylaod

*/
import {getStore, updateStore} from './../redux/store'

const reducer  = function( action){
  console.log(action.payload, action.type)
     
    switch(action.type){
        case "edit": 
        const store = getStore()
        const index = store.findIndex(employee=> employee.id === action.payload.id)
        store[index] = action.payload
        action.cb();
        return null
        case "delete":
        const deleteStore = getStore()
        const deleteIndex = action.payload.index
        const deleteNewState = [...deleteStore.slice(0,deleteIndex), ...deleteStore.slice(deleteIndex+1)]
        updateStore(deleteNewState)
        action.cb();
        return null
        case "add":
        const addStore = getStore()
        addStore.push(action.payload)
        action.cb();
        return null
        default: return getStore()
    }

}

export default reducer