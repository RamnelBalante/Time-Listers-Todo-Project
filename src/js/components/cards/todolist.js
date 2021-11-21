import makeElement from '../../utils/makeElement'
const directory = function (){
    const template = `
    <div>
    <ul id="todolist" class="todolist"> 
     
    </ul>
    </div>
    `

    return makeElement(template)
}

export default directory