import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import reducer from "../../redux/reducers"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"
import { formTemplate } from "../../components/cards/todoform"

import styles from "./styles.module.scss"



    const cancelButton = button("cancel")
    const editButton = button("edit")

    
    const editPage = function(props){
        
        const page = document.createElement('div')
        console.log(props)
        let headerTemplate = `
            <header class="welcome center-in-page ${styles.editPage}">
                <h1>Edit ToDo List</h1>
                <p>No time like the present!</p>
                <div>
                </div>
                <div class="button-container">
                </div>
            </header>
        `
        function cleanUp(){
            cancelButton.removeEventListener('click', onCancelEdit)
            editButton.removeEventListener('click', onEditEmployee)
        }

        function onCancelEdit (e){
            cleanUp()
            Router('/todo')
        }

        function onEditEmployee (e){
            const formEdit = document.getElementById('formId')
            const formData = new FormData(formEdit);
            const formDataObject = Object.fromEntries(formData.entries());
            const action={
                type:"edit",
                payload:formDataObject,
                cb: ()=> cleanUp()
            }
            reducer(action)
            Router('/todo')
        }

        function render(){
            const employeeList = getStore()
            const elements = employeeList.find(emp => emp.id === props.id)
            const elementItem = formTemplate(elements)

            const pageHeader = makeElement(headerTemplate)
            cancelButton.addEventListener('click', onCancelEdit)
            editButton.addEventListener('click', onEditEmployee)
            pageHeader.querySelector('div').append(elementItem)
            pageHeader.querySelector('div.button-container').append(cancelButton, editButton)
            page.append(pageHeader)
            
        }

        render()

    return page
}

export default editPage