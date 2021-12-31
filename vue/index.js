var coursesApi = "http://localhost:3000/courses"
function start() {
    getCourses(renderHTML)
}
start();
function getCourses(callback) {
    fetch(coursesApi)
        .then(response => response.json())
        .then(callback)
}
function renderHTML(courses) {
    var coursesDetails = document.getElementById('courses-details')
    var htmls = courses.map(course => 
        `<li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>        
        </li>`
    )
    coursesDetails.innerHTML = htmls.join('')
}

function createData() {
    var createBtn = document.getElementById('btnCreate')
    var nameInput = document.getElementsByName('name')
    var descriptionInput = document.getElementsByName('description')
    alert('meo meo')
}