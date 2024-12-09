 function  result() {
    // 
    var name = document.getElementById("name").Value;
    var rollno = document.getElementById("rollno").Value;
    var chem = document.getElementById("chemistry").Value;
    var phy = document.getElementById("physics").Value;
    var comp = document.getElementById("Computer").Value;
    var eng = document.getElementById("english").Value;

    // 
    name  = Number(eng)
    rollno  = Number(eng)
    chem  = Number(eng)
    phy  = Number(eng)
    comp  = Number(eng)
    eng = Number(eng)

    // 
    var total = chem + phy + comp + eng ;
    var percentage = (total/400)*100;

    // 
    var grade ;
    var status ;

    // 

    if ( percentage >= 90) {
        grade = "A+" ;
        status = "Pass" ;
    } if ( percentage >= 80) {
        grade = "A" ;
        status = "Pass" ;
 } if ( percentage >= 70) {
    grade = "B" ;
    status = "Pass" ;
 } if ( percentage >= 60) {
    grade ="C" ;
    status = "Pass" ;
 } if ( percentage >= 50) {
    grade ="D" ;
    status = "Pass" ;
 } else {
    grade = "F" ;
    status = "Fail"
 }

//  
 var resultDiv = document.getElementById("result");  resultDiv.innerHTML=
 "<p> Student Name : " +  name + "</p>"
 "<p> Total Marks : "   + total + "/400 </p>"
"<p>  percentage : "    + percentage.toFixed(2) + "% </p>"
"<p>   grade : "       +  grade + "</p>"
"<p>    status : "   +  (status === "Pass" + "Pass" + "Fail") +" status:" + status + "</p>"

 }

