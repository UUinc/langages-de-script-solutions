//Exercice 4
//Generate random equations
function RandomEquation()
{
    return Math.floor(Math.random() * 10) +"*"+ Math.floor(Math.random() * 10);
}

document.getElementById("question1").innerText = RandomEquation();
document.getElementById("question2").innerText = RandomEquation();
document.getElementById("question3").innerText = RandomEquation();
document.getElementById("question4").innerText = RandomEquation();

function Valider()
{
    var reponseCorrect=0;

    var q1 = document.getElementById("question1").innerText.split("*");
    var a1 = document.getElementById("answer1").value;
    //check answer
    if(a1 == q1[0]*q1[1]) reponseCorrect++;
    
    var q2 = document.getElementById("question2").innerText.split("*");
    var a2 = document.getElementById("answer2").value;
    //check answer
    if(a2 == q2[0]*q2[1]) reponseCorrect++;
    
    var q3 = document.getElementById("question3").innerText.split("*");
    var a3 = document.getElementById("answer3").value;
    //check answer
    if(a3 == q3[0]*q3[1]) reponseCorrect++;
    
    var q4 = document.getElementById("question4").innerText.split("*");
    var a4 = document.getElementById("answer4").value;
    //check answer
    if(a4 == q4[0]*q4[1]) reponseCorrect++;

    var check = confirm("Vous avez "+ reponseCorrect + " bonnes reponses. correction ?");
    if (check) 
    {
        document.getElementById("answer1").value = q1[0]*q1[1];
        document.getElementById("answer2").value = q2[0]*q2[1];
        document.getElementById("answer3").value = q3[0]*q3[1];
        document.getElementById("answer4").value = q4[0]*q4[1];
    } 
}