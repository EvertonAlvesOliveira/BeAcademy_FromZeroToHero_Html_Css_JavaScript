function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("emailid").innerHTML="E-mail válido";
    alert("E-mail valido");
    }
    else{
    document.getElementById("emailid").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
    }
}



function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado Sr(a) ' + nome.value + ' dados encaminhados com sucesso!');
    }
}