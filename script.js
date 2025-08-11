
function add(){
    var inp1=document.getElementById("inp1")
    var num1=parseFloat(inp1.value)
    var inp2=document.getElementById("inp2")
    var num2=parseFloat(inp2.value)
    var sum = num1+num2
    document.getElementById("result").textContent="Result is :" + sum
}

var points=10
function check(){
    var rndnum = Math.floor(10*Math.random())+1
    var n1=document.getElementById("num1")
    if(n1.value==rndnum){
        points=points+2
        if(points>=10){
            document.getElementById("points").textContent="Your Points: 10; You are doin GREAT!!!"
            document.getElementById("check").textContent="You Won"
            points=10
        }else{
            document.getElementById("points").textContent="Your Points: "+points
            document.getElementById("check").textContent="Your Answer is RIGHT!!"
        }
    }
    else{
        points=points-1
        document.getElementById("points").textContent="Your Points: "+points
        if(points<0){
            document.getElementById("points").textContent="Your Points: 0"
            document.getElementById("check").textContent="You Lose"
            points=0
        }else{
            document.getElementById("points").textContent="Your Points: "+points
            document.getElementById("check").textContent="Your Answer is WRONG..."
        }
    }
}   

