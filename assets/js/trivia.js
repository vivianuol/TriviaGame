    
    
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




        // $("#questions").text(Q1.question)
        // for (var i=0; i<Q1.answer.length; i++) {
        //     var div = $("<div>")
        //     div.attr("id", i )
        //     div.text(Q1.answer[i])
        //     $("#choices").append(div)
        // }
        var buttonDiv= $("<div>")
            console.log(buttonDiv)
        var startButton = $("<button>")
            startButton.text( "START" )
            console.log(startButton)
            buttonDiv.append(startButton)
            $(".wrapper").append(buttonDiv)

        $("button").click(function(){
            buttonDiv.empty()
            initialQuestion()
            questionFlow()
        })


    
    function clear() {
        $("#questions").empty()
        $("#choices").empty()
    }

    function initialQuestion () {
    $("#questions").text(Q1.question)
        for (var i=0; i<Q1.answer.length; i++) {
            var div = $("<div>")
            div.attr("id", i )
            div.text(Q1.answer[i])
            $("#choices").append(div)
        }
    }

    
    var j=0;
    function questionFlow() {
        var qandaDiv = $("#questionAnswer");
        qandaDiv.click(function(event){
        console.log(event.target)
       // debugger
            console.log("j: " + j)
            if ( j<questionPool.length){
              
                var targetChoice = event.target
                console.log("targetChoice: " +$(targetChoice).attr("id"))
                console.log("correctAnswer: " + questionPool[j].correctAnswer)
                if ($(targetChoice).attr("id")==questionPool[j].correctAnswer) {
                    alert ("Correct!")
                } else {
                    alert ("Wrong!")
                }
                j++;
                clear()
                $("#questions").text(questionPool[j].question)
                for (var k=0; k<questionPool[j].answer.length; k++) {
                    var div = $("<div>")
                    div.attr("id", k)
                    div.text(questionPool[j].answer[k])
                    $("#choices").append(div)
                }
            
        
    //  
//             for (var i=0; i<Q1.answer.length; i++) {
//                 var div = $("<div>")
//                 div.attr("id", i )
//                 div.text(Q1.answer[i])
//                 $("#choices").append(div)
//                 console.log(div) 
                

            } else if ( j===questionPool.length) {
                var end= $("<div>quiz end!<div>")
                $("#questionAnswer").append(end)

            }
            // for (var ){
            // var c =$("<p>")
            // c.append(questionPool[j].answer[k]+ "<br>")
            //     $("#choices").text(c)
            //}
        }
    )
}  