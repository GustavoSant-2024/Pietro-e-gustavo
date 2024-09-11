var resp = Array();
var num = 0;
var soma=0;

do{
    resp[num] = parseInt(prompt("Digite um número"));
    num++;
}while(resp[num-1] !=0);
resp.forEach((x)=>{
    soma+=x;
})
alert("a soma de todos os números é:"+soma+".");
