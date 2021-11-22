import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import reducer from "../../redux/reducers"
import { Router } from "../../routes/router"

import styles from "./styles.module.scss"



    const cancelButton = button("cancel")
    const addButton = button("add")

    
    const addPage = function(){
        
        const page = document.createElement('div')
        let headerTemplate = `
            <header class="welcome center-in-page ${styles.addPage}">
                <h1>Add ToDo List</h1>
                <p>No time like the present!</p>
                <div>
                </div>
                <div class="button-container">
                </div>
            </header>
        `
        function cleanUp(){
            cancelButton.removeEventListener('click', onCancelAdd)
            addButton.removeEventListener('click', onAddEmployee)
        }

        function onCancelAdd (e){
            cleanUp()
            Router('/todo')
        }

        function onAddEmployee (e){
            const formAdd = document.getElementById('formId')
            const formData = new FormData(formAdd);
            const formDataObject = Object.fromEntries(formData.entries());
            const action={
                type:"add",
                payload:formDataObject,
                cb: ()=> cleanUp()
            }
            reducer(action)
            Router('/todo')
        }

        function render(){
            let formTemplate = `
            <form id="formId">
                <label for="id">ID</label>
                <input type="text" id="id" name="id" value="">

                <label for="category">Category</label>
                <select name="category" id="category">
                    <option selected disabled>Choose a category</option>
                    <option value="business">Business</option>
                    <option value="family">Family</option>
                    <option value="pets">Pets</option>
                    <option value="personal">Personal</option>
                    <option value="other">Other</option>
                </select>

                <label for="title">Title</label>
                <input type="text" id="title" name="title" value="">

                <label for="isComplete">Completed</label>
                <select name="isComplete" id="isComplete">
                    <option selected disabled>Choose an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <label for="startDate">Start Date</label>
                <input type="text" id="startDate" name="startDate" value="">

                <label for="startTime">Start Time</label>
                <input type="text" id="startTime" name="startTime" value="">

                <label for="endDate">End Date</label>
                <input type="text" id="endDate" name="endDate" value="">

                <label for="endTime">End Time</label>
                <input type="text" id="endTime" name="endTime" value="">
            </form>
            `

            const pageHeader = makeElement(headerTemplate)
            const addForm = makeElement(formTemplate)
            cancelButton.addEventListener('click', onCancelAdd)
            addButton.addEventListener('click', onAddEmployee)
            pageHeader.querySelector('div').append(addForm)
            pageHeader.querySelector('div.button-container').append(cancelButton, addButton)
            page.append(pageHeader)
            
        }

        render()

    return page
}

export default addPage