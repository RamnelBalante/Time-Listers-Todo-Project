
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
        case "edit": return "edit an employee";
        case "delete":
        const store = getStore()
        const index = action.payload.index
        const newState = [...store.slice(0,index), ...store.slice(index+1)]
        updateStore(newState)
        action.cb();
        return null
        case "add": return "add a new employee";
        default: return getStore()
    }

}

export default reducer