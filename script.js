const element = document.querySelector('#push');

element.addEventListener('click', doing)
function doing(){
    // input  validation
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
        </div>
        `
    }
}