mensagem = (msg) => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = X => Math.sqrt(X);
let a = "";
let b = "";
let c = "";
let sa = "+";
let sb = "+";
let sc = "+";
let valor = "";
let temPonto = false;
let desligada = true;

function escrever_display(num){
  document.getElementById("resultado").value = num;

}
function digitando(tecla){
     if( tecla == "."){
       if(!temPonto){
         temPonto = true;
         valor += tecla
         escrever_display(valor)
    }
    return;
  }
valor += tecla
escrever_display(valor);

}
let executa = "";
function operacao(op){
  executa = op;
  a = valor;
  valor = "";
  temPonto = false; 
}
function calcula(){
  if(executa != "")
  b=valor;
  if(executa == "mult") escrever_display(mult(a,b));
  if(executa == "div") escrever_display(div(a,b));
  if(executa == "sub") escrever_display(sub(a,b));
  if(executa == "soma") escrever_display(soma(Number(a), Number(b)));
  a = "";
  b = "";
  valor = "";
  temPonto = false;
}

const set_sinal_ = ()=>{
  
}
