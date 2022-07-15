document.querySelector('#buttonto').onclick = function(){
    if(document.querySelector('#todo input').value.length == 0){
        console.log("yozuv kirgizing");
    }

    else{
        document.querySelector('#todolist').innerHTML += `
            <div class="dotolist">
                <span id="taskname">
                    ${document.querySelector('#todo input').value}
                </span>
                <button class="delete">
                <i class='bx bx-x'></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}