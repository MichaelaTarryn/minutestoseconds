

function convertor(){
    let minutes =document.getElementById("minutes").value;
    let seconds =document.getElementById("seconds");
    let convertor=eval((minutes*60));
    seconds.value=convertor+"s";
}

function convertor2(){
    let minutes =document.getElementById("minutes").value;
    let seconds =document.getElementById("hour");
    let convertor=eval((minutes/60));
    hour.value=convertor+"";
}