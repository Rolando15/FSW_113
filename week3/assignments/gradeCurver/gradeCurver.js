// declare each of the variables marked with "**" in the appropriate scope and using the appropriate type

// create an event listener that calls the curveGrade() function when the Curve It!! button is clicked

// create an event listener that resets the scores and grades to their defaults when the Reset button is clicked
var gradesDiv = document.getElementById("grades")

function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break

    }
}



function convertArray(obj) {
    ary = obj.value.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

// Condense the number of lines within the curveGrade() function as much as possible by converting 
// the functions to arrow functions. You can also condense the number of lines by combining some 
// separate lines of code into single lines. It currently has 18 lines of code. Without counting  
// empty lines, can you get the number of lines down to 8?

var submit = document.getElementById('submit');
submit.addEventListener("click", curveGrades)
   
function curveGrades() {
    
    let aryGrades = convertArray(document.querySelector('#scores'))
 
    sumGrades = aryGrades.reduce((acc, current)=>acc+current, 0)

    minGrade = aryGrades.reduce((a, b) => Math.min (a, b))
    
    maxGrade = aryGrades.reduce((a,b)=> Math.max(a, b))

    mean = sumGrades / aryGrades.length

    range = maxGrade - minGrade

    gradeSlice = range / 5

    // write the value of aryGrades to the grades div in the HTML document
   
    aryGrades.forEach((grade, index) => applyBell(grade, index, aryGrades))
    
     gradesDiv.innerHTML=(aryGrades)
}

var reset = document.getElementById("reset")
reset.addEventListener("click",()=>{
    gradesDiv.innerHTML=("Curved Grades Show Here");

});
