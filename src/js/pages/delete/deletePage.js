
import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import reducer from "../../redux/reducers"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"
import { todoTemplate } from "../../components/cards/todoitem"

import styles from "./styles.module.scss"



    const cancelButton = button("cancel")
    const deleteButton = button("delete")

    
    const deletePage = function(props){
        
        const page = document.createElement('div')
        let headerTemplate = `
            <header class="welcome center-in-page ${styles.deletePage}">
                <h1>Delete ToDo List</h1>
                <p>delete this ${props.cat} list?</p>
                <div class="button-container">
                </div>
            </header>
        `
        function cleanUp(){
            cancelButton.removeEventListener('click', onCancelDelete)
            deleteButton.removeEventListener('click', onDeleteEmployee)
        }

        function onCancelDelete (e){
            cleanUp()
            Router('/todo')
        }

        function onDeleteEmployee (e){
            const index = getStore().findIndex(employee=> employee.id === props.id)
            const action ={
                type:"delete",
                payload:{index},
                cb: ()=> cleanUp()
            }
            reducer(action)
            Router('/todo')
        }

    const pageHeader = makeElement(headerTemplate)
    const pageItem = (props.item)
    cancelButton.addEventListener('click', onCancelDelete)
    deleteButton.addEventListener('click', onDeleteEmployee)
    pageHeader.querySelector('div.button-container').append(cancelButton, deleteButton)
    page.append(pageHeader)
    page.append(pageItem)

    return page
}

export default deletePage