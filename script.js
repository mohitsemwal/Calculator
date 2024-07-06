let input = document.getElementById("input")
function myFunction(value){
    input.value += value
}

function result(){
    let ans = eval(input.value);
    input.value = ans
}

function clearInput(){
    input.value = '';
}
function DELETE(){
    let inputValue = input.value.slice(0,-1)
    input.value = inputValue
}