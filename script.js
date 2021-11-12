

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

    // js dict containing question ids as keys
    var answers = {
        "textbox": {
            "q1": "banana",
            "q2": "grape"
        },
        // checkboxes have their value as a list of corrrect element ids
        "checkbox": {
            "q3": ["c1", "c2", "c4"]
        },
        "radio": {
            "q4": "q4true"
        }
    }

    for (var t in answers["textbox"]) {
        let ans = document.getElementById(t).value
        if (ans.toLowerCase() == answers["textbox"][t]) {
            score++;
        }
    }

    for (var c in answers["checkbox"]) {
        if (evalCheckbox(document.getElementById(c), answers["checkbox"][c])){
            score++;
        }
    }

    for (var r in answers["radio"]) {
        // checks if correct radio is checked 
        if (document.getElementById(answers["radio"][r]).checked) {
            score++;
        }
    }

    //update score element 
    document.getElementById("result").innerHTML = "score: " + score
}