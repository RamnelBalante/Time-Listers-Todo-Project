import makeElement from '../utils/makeElement'
import link from '../components/ui/link'
import brand from '../components/brand/brandingHeader'
const notFound = function(){
    const page = document.createElement('div')
    const brnd = brand('header')
    const back = link("back to app", '/todo')
    const template = `
    <header class="error">
    <svg class="error-logo" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>    
    <p>404 page not found</p>  
    </header>    
    `;
    const pageHeader = makeElement(template)
    pageHeader.append(back)
    page.append(brnd)
    page.append(pageHeader)

    return page
}

export default notFound