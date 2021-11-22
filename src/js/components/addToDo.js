import button from "./ui/button";
const addToDo = function() {

const foot = document.createElement('footer')
const btn = button("+Add")
foot.append(btn)

return foot

}
export default addToDo