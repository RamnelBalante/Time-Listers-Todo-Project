import directory from '../components/cards/todolist'
import makeElement from '../utils/makeElement'
import link from '../components/ui/link'
import logo from "../components/icons/logo"
import header from "../components/header"
import tagline from "../components/tagline"
import {getStore} from '../redux/store'
import { todoTemplate } from '../components/cards/todoitem'
import brand from '../components/brand/brandingHeader'
import addToDo from '../components/addToDo'
import { Router } from '../routes/router'

const todoPage = function(){
    const page = document.createElement('div')
    const brnd = brand('header')
    const add = addToDo()
    const container = directory();
    
    function cleanUp(){
      const employees = container.querySelectorAll('li')
      employees.forEach(employee=>{
        employee.removeEventListener('click', onDeleteEmployee)
      })

    }

    function onDeleteEmployee (e){
      const employeeId = {id:e.currentTarget.dataset.key, cat:e.currentTarget.parentElement.parentElement.parentElement.className};
      cleanUp()
      Router('/delete', employeeId)
    }

    function render(){
      const employeeList = getStore()
      const ul = container.querySelector('ul')
      ul.innerHTML = ''
      const elements = employeeList.map(emp => todoTemplate(emp))
      elements.forEach(element=> {
        element.querySelector('#delete').addEventListener('click', onDeleteEmployee)

        ul.append(element)
      })
      page.append(brnd)
      page.append(container)
      page.append(add)
    }

    render()
    
   
    
    return page
}

export default todoPage