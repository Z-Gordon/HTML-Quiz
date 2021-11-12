

function evalCheckbox(checkboxDiv, correctIds) {

    // iterates though a list of ids given and adds them to list of correct elements
    correctElements = []
    correctIds.forEach(function(id) {
        correctElements.push(document.getElementById(id))
    }); 

    totalChecked = Array.from(checkboxDiv.querySelectorAll("input[type='checkbox']:checked"));

    // returns true if the checked checkboxes within the div all match the list of correct elements
    return totalChecked.sort().join(',') == correctElements.sort().join(',')
}

function submitQuiz(){
    var score = 0;
    var a1 = document.getElementById("q1");
    if (a1.value.toLowerCase() == "banana"){
        score++;
        a1.getElementByTagName("label").style.backgroundColor = "green";
    }
    else {
        a1.getElementByTagName("label").style.backgroundColor = "red";
    }

    var a2 = document.getElementById("q2");
    if (a2.value.toLowerCase() == "grape"){
        score++;
    }

    var a3 = document.getElementById("q3");
    if (evalCheckbox(a3, ["c1", "c2", "c4"])) {
        score++;
    }

    if (document.getElementById("q4true").checked) {
        score ++;
    }
    
    document.getElementById("result").innerHTML = "score: " + score
}