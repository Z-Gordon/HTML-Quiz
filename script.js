var score = 0;

function evalCheckbox(checkboxDiv, correctIds) {

    // iterates though a list of ids given and adds them to list of correct elements
    correctElements = [];
    correctIds.forEach(function(id) {
        correctElements.push(document.getElementById(id));
    }); 

    totalChecked = Array.from(checkboxDiv.querySelectorAll("input[type='checkbox']:checked"));

    // returns true if the checked checkboxes within the div all match the list of correct elements
    return totalChecked.sort().join(',') == correctElements.sort().join(',');
}

function submitQuiz(){
    score = 0;
    // i guess you could have this as an external json file
    // and make it private to hide the answers
    var answers = {
        "q1": {
            "type": "textbox",
            "ans": "banana"
        },
        "q2": {
            "type": "textbox",
            "ans": "grape"
        },
        "q6": {
            "type": "textbox",
            "ans": "fruitninja"
        },
        "q3": {
            "type": "checkbox",
            "ans": ["q3c1", "q3c2", "q3c4"]
        },
        "q5": {
            "type": "checkbox",
            "ans": ["q5c1", "q3c4"]
        },
        "q8": {
            "type": "checkbox",
            "ans": ["q8c2", "q8c3"]
        },   
        "q4": {
            "type": "radio",
            "ans": "q4true"
        },
        "q7": {
            "type": "radio",
            "ans": "q7r4"
        },
    };

    for (var a in answers) {
        let type = answers[a]["type"];
        let element = document.getElementById(a);
        let answer = answers[a]["ans"];
        let isCorrect = false;

        if (type == "textbox" && element.value.toLowerCase().replace(/ /g, '') == answer) {
            isCorrect = true;
        }
        else if (type == "checkbox" && evalCheckbox(element, answer)) {
            isCorrect = true;
        }
        else if (type == "radio" && document.getElementById(answer).checked) {
            isCorrect = true;
        }

        if (isCorrect == true) {
            score++;
            document.querySelector("label[for=" + a + "]").style.color = "green";
        }
        else {
            document.querySelector("label[for=" + a + "]").style.color = "red";
        }
    }

    max_score = 0
    for (k in answers) {
        max_score += Object.values(answers[k]).length;
    } 

    grade = Math.round(score/max_score*100)
    //update score element 
    if (grade == 100){
        document.getElementById("result").innerHTML = `score: ${grade}% Perfect :)`;
    }
    else if (grade <= 50){
        document.getElementById("result").innerHTML = `score: ${grade}% you failed :(`;
    }
    else {
        document.getElementById("result").innerHTML = `score: ${grade}% you passed!`;
    }
}