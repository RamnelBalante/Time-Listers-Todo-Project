import makeElement from "../../utils/makeElement"
import edit from "../ui/editButton"
import remove from "../ui/deleteButton"

const todoTemplate = function ({id,category,title,isComplete,endDate}) {
const edt = edit()
const del = remove()
    const template =   `
    <li class="${category}" data-key="${id}">
    <div class="list-item">
        <h2>${title}</h2>
        <div class="${isComplete}">
            <p>completed</p>
            <p>incomplete</p>
        </div>
        <p>${endDate}</p>
        <p>
            <button data-key="${id}" id="delete">delete</button>
        </p>
    </div>
 </li>
    `
const temp = makeElement(template)
temp.append(edt)
temp.append(del)

return temp
}

export {todoTemplate}