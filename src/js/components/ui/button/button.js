import makeElement from "~/src/js/utils/makeElement";
import styles from './styles.module.scss'

const button = function (label="ui button", uiStyles){
     const template = `
     <div class="${styles[uiStyles] || styles.buttonBase}">
        <button>${label}</button>
     </div>
     `
     const element = makeElement(template);

     return element  
}

export default button