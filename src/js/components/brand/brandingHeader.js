import logo from "../icons/logo";
import header from "../header";
import tagline from "../tagline";
const brand = function() {

const branding = document.createElement('header')
const brandDiv = document.createElement('div')
const titleDiv = document.createElement('div')
brandDiv.className = "brand"
titleDiv.className = "title-div"
const icon = logo("brand-logo")
const heading = header("Time Listers")
const tag = tagline("No time like the present")
titleDiv.append(icon)
titleDiv.append(heading)
brandDiv.append(titleDiv)
brandDiv.append(tag)
branding.append(brandDiv)

return branding

}
export default brand