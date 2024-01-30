let element = document.querySelector('#push')

element.onclick = function(){
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