import makeElement from "../utils/makeElement"


const header = function (title = "uiHeader", className = "heading"){
    const template = ` <h1 class="${className}">${title}</h1>`

    return makeElement(template)
}

export default header