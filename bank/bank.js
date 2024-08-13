
let sum=0;
function deposit(){
    let dep = parseFloat(document.getElementById("dep").value);

    if(dep>0){
        sum+=dep
    }else{
        alert("enter valid amount")
    }
    document.getElementById('dep').value='';
    
}
function withdraw(){
    let wd = parseFloat(document.getElementById("wd").value);
    if(wd>0&&wd<=sum){
    sum-=wd
}else{
    alert("enter valid amount or insufficient balance")
}
    document.getElementById('wd').value='';

}
function show(){
    document.getElementById("sowbal").innerText=`${sum}`;
}