var answer = ["went", "left", "forgotten", "love", "curled up", "prepared", "finished", "completed", "blossom", "reads", "prefer", "and"];
var result = 0;

function checkGame(){
    result = 0;
    for (let i = 1; i < answer.length + 1; i++){
        var q = document.getElementById("q" + i);
        if (q.value.trim().length == 0){
            q.classList.add("error");
        }
        console.log(answer[i]);
        if (q.value.trim() != answer[i-1].trim()){
            q.classList.add("error");
        } else {
            q.classList.add("validate");
            result++;
        }
    }

    if (result == answer.length){
        localStorage.setItem("jeuAnglais", "true");
        goBack();
    }
}