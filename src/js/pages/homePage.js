import makeElement from '../utils/makeElement'
import link from '../components/ui/link'
import buttonGeneral from "../components/ui/button"
import logo from "../components/icons/logo"
import header from "../components/header"
import tagline from "../components/tagline"

const head = document.createElement('header')
const icon = logo("homepage-logo")
const heading = header("Time Listers", "home-page-h1")
const tag = tagline("Time to get it done", "home-page-tagline")
const lnk = link("to do app", "/todo", "home-page-link")
const indexPage = function(){

head.append(icon)
head.append(heading)
head.append(tag)
head.append(lnk)

return head
}

export default indexPage