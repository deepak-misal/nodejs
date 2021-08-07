(function() {

    var questionList = []
    var questions = {}
    var questionNo = 0;
    var score = 0;
    var totalScore = 10;
    var answer;
    var next = -1;
    var currentAnswer;

    document.getElementById('reload').style.visibility = "hidden";
    document.getElementById('quiz').style.visibility="hidden";
    document.getElementById('next').style.visibility="hidden";

    let btn1 = document.getElementById('start');
    btn1.addEventListener("click", function() {
        document.getElementById('quiz').style.visibility="visible";
        document.getElementById('next').style.visibility="visible";
        storeQuestions();
        showQuestions(next);
    })

    let btn2 = document.getElementById('next');
    btn2.addEventListener("click", function() {
        if (document.getElementById('value1').checked)
            currentAnswer = document.getElementById('label1').innerHTML;
        if (document.getElementById('value2').checked)
            currentAnswer = document.getElementById('label2').innerHTML;
        if (document.getElementById('value3').checked)
            currentAnswer = document.getElementById('label3').innerHTML;
        if (document.getElementById('value4').checked)
            currentAnswer = document.getElementById('label4').innerHTML;
        if (currentAnswer == answer)
            score += 2;
        console.log(marks);
        console.log("next 1 : " + next)
        if (next < 6)
            showQuestions();
    })

    let btn3 = document.getElementById('reload');
    btn3.addEventListener("click", function() {
        window.location.reload();
    })

    function storeQuestions() {
        addQuestion("What is 2*5?", "2", "5", "10", "15", "10");
        addQuestion("What is 3*6?", "3", "6", "9", "18", "18");
        addQuestion("What is 8*9?", "8", "9", "42", "72", "72");
        addQuestion("What is 1*7?", "7", "8", "9", "17", "7");
        addQuestion("What is 8*8?", "78", "64", "33", "88", "64");
    }

    function addQuestion(question, option1, option2, option3, option4, answer) {
        questionNo++;
        questions = {
            id: questionNo,
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            answer: answer,
        };
        questionList.push(questions);
        console.log(questionList);
        storeToLocalStorage();
    }

    function storeToLocalStorage() {
        localStorage.setItem("questionList", JSON.stringify(questionList))
    }

    function showQuestions() {
        document.getElementById('start').style.visibility="hidden";
        next++
        if (next == 5) {
            document.getElementById('marks').innerHTML = "You scored " + score * totalScore + " %";
            document.getElementById('reload').style.visibility = "visible";
            return;
        }
        console.log("next 2 : " + next)
        document.getElementById("question").innerHTML = questionList[next].question;
        document.getElementById("option1").innerHTML = questionList[next].option1;
        document.getElementById("option2").innerHTML = questionList[next].option2;
        document.getElementById("option3").innerHTML = questionList[next].option3;
        document.getElementById("option4").innerHTML = questionList[next].option4;
        answer = questionList[next].answer;

    }

})();