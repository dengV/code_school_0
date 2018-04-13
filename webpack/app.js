var updateSum = function(){
    document.getElementById('sum').innerHTML = math.sum(
        parseInt(document.getElementById('text1').value),
        parseInt(document.getElementById('text2').value)
    );
}