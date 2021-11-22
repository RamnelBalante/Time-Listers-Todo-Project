import makeElement from "../../utils/makeElement"

const formTemplate = function ({id,category,title,isComplete,startDate,startTime,endDate,endTime}) {
    const template =   `
    <form id="formId">
        <label for="id">ID</label>
        <input type="text" id="id" name="id" value="${id}">

        <label for="category">Category</label>
            <select name="category" id="category">
            <option value="${category}">Choose a category</option>
            <option value="business">Business</option>
            <option value="family">Family</option>
            <option value="pets">Pets</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
        </select>

        <label for="title">Title</label>
        <input type="text" id="title" name="title" value="${title}">

        <label for="isComplete">Completed</label>
        <select name="isComplete" id="isComplete">
            <option value="${isComplete}">Choose an option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>

        <label for="startDate">Start Date</label>
        <input type="text" id="startDate" name="startDate" value="${startDate}">

        <label for="startTime">Start Time</label>
        <input type="text" id="startTime" name="startTime" value="${startTime}">

        <label for="endDate">End Date</label>
        <input type="text" id="endDate" name="endDate" value="${endDate}">

        <label for="endTime">End Time</label>
        <input type="text" id="endTime" name="endTime" value="${endTime}">
    </form>
    `
const temp = makeElement(template)

return temp
}

export {formTemplate}