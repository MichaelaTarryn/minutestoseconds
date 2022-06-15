function convertor(){
    let base=document.getElementById("base").value;
    let height =document.getElementById("height").value;
    let calculate=eval((1/2 *base *height));
    let output =document.getElementById('output')
    output.innerHTML=calculate+"cm²";
}