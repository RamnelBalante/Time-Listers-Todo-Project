import home  from "../pages/homePage";
import todoPage from "../pages/toDoPage";
import notFound from "../pages/pageNotFound";
import deletePage from "../pages/delete/deletePage";
import editPage from "../pages/edit/editPage";
import addPage from "../pages/add";
const routes = {
    "/": home,
    "/todo":todoPage,
    "/delete":deletePage,
    "/edit":editPage,
    "/add":addPage,
    "/*":notFound,
}


const Router =  function (pathname, params=null)   {

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    console.log(isValidRoute)
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
       if(isValidRoute === undefined){
           app.append(notFound())
       }else{
        app.appendChild(routes[window.location.pathname](params))
       }
    

}



 
export { Router}