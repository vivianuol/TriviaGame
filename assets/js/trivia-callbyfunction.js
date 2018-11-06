//------------here is my question pool----------------------
var Q1 = {
    question: "Which fictional city is the home of Batman?",
    answer: ["Geogetown","Gotham City","Johnson City"],
    correctAnswer: "1"
}

var Q2 = {
    question: "Spinach is high in which mineral? ",
    answer: ["Zion","Calcium","Iron"],
    correctAnswer: "2"
}

var Q3 = {
    question: "Which type of dog has breeds called Scottish, Welsh and Irish?",
    answer: ["Terrier","Retrievers","Rottweilers"],
    correctAnswer: "0"
}

var Q4 = {
    question: "Who was known as the Maid of Orleans?",
    answer: ["Lorda in Occitan","Mater Teresia","Joan of Arc"],
    correctAnswer: "2"
}

var Q5 = {
    question: "In the film Babe, what type of animal was Babe?",
    answer: ["A pig","A dog","A cat"],
    correctAnswer: "0"
}

var Q6 = {
    question: "What was Mohammed Ali’s birth name?",
    answer: ["Cassius Clay","John Smith","Joe Baiden"],
    correctAnswer: "0"
}

var questionPool = [Q1,Q2,Q3,Q4,Q5,Q6]

//--------------- End of question pool------------------

//--------------- start the game -----------------------
startgame()
function startgame() {
    var startbutton=$("<button>")
    startbutton.text("start")
    $(".start").append(startbutton)
    startbutton.click(function(){
        $(".start").remove()
        console.log(this)
        showQuestion(i)
    })
}


//--------------- go through the questions --------------
var i =0 
var correctNum = 0;
var wrongNum = 0;
var unansweredNum = 0;

// STEP 1: show each question & 4 choices---------------

    function clear() {
        $("#questions").empty()
        $("#choices").empty()
    }

    function showQuestion(index){
        $("#questions").text(questionPool[index].question)
        for (var j=0; j<questionPool[index].answer.length; j++) {
            var div = $("<div>")
            div.attr("id", j)
            div.text(questionPool[index].answer[j])
            div.click(showAnswer)
            $("#choices").append(div)
        }
        startTimer()
    }

//STEP 2: -------show answer--------------------------------
    function showAnswer(event){
        clearInterval(intervalId)
        var targetChoice = event.target
        var theQuestion=questionPool[i]
        console.log("targetChoice: " +$(targetChoice).attr("id"))
        console.log("correctAnswer: " + theQuestion.correctAnswer)
        if ($(targetChoice).attr("id")===theQuestion.correctAnswer) {
            $("#questions").text("Correct!")
            $("#choices").text("the correct answer is: " + theQuestion.answer[parseInt(theQuestion.correctAnswer)])
            correctNum++
        } else {
            $("#questions").text("Wrong!")
            $("#choices").text("the correct answer is: " + theQuestion.answer[parseInt(theQuestion.correctAnswer)])
            wrongNum++
        }
        showNext()
    }

//STEP: 3 ---------show next-------------------------------
    function showNext() {
        i++
        if (i <questionPool.length) {
            setTimeout(function(){
                clear()
                showQuestion(i)
            },3000)
        } else {
            clear()
            $("#questions").text("All done, here's how you did!")
            $("#choices").append("Correct Answers: " + correctNum + "<br/>")
            $("#choices").append("Incorrect Answers: " + wrongNum + "<br/>")
            $("#choices").append("Unanswers: " + unansweredNum + "<br/>")

        }
    }

    function startover(){
        var startoverbutton=$("<button>")
        startoverbutton.text("Start Over")
        startoverbutton.click(function(){
            i = 0
            correctNum = 0;
            wrongNum = 0;
            unansweredNum = 0;
            clear()
            showQuestion(i)
        })
        $("#choices").append(startoverbutton)
    }

    var totalSecond;
    var intervalId;
    function startTimer() {
        totalSecond = 4;
        $('#countdown').text(totalSecond + " Seconds")
        intervalId = setInterval(count, 1000);
    }

    function count() {
        if(totalSecond === 0) {
            clearInterval(intervalId)
            showTimeOut();
        } else {
            totalSecond--
            $('#countdown').text(totalSecond + " Seconds")
        }
    }

    function showTimeOut() {
        unansweredNum++
        var theQuestion=questionPool[i]
        $("#questions").text("Out of Time!")
        $("#choices").text("the correct answer is: " + theQuestion.answer[parseInt(theQuestion.correctAnswer)])
        showNext()
    }
