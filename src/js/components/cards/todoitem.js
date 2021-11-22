import makeElement from "../../utils/makeElement"

const todoTemplate = function ({id,category,title,isComplete,endDate}) {
    const template =   `
    <li class="${category}" data-key="${id}">
    <div class="list-item">
        <h2>${title}</h2>
        <div class="${isComplete}">
            <p>completed</p>
            <p>incomplete</p>
        </div>
        <p>Due by ${endDate}</p>
        <p class="button_pair">
            <button data-key="${id}" id="delete">delete</button>
            <button data-key="${id}" id="edit">edit</button>
        </p>
    </div>
 </li>
    `
const temp = makeElement(template)

return temp
}

export {todoTemplate}