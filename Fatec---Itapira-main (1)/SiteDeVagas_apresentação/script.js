function validar() {
    var nome = document.getElementById('nome')
    var sobrenome = document.getElementById('sobrenome')
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')
    var confirma = document.getElementById('confirma')

    if (nome.value == '')
    alert('Nome não inserido')
    else if (sobrenome.value == '')
    alert('Sobrenome não inserido')
    else if (login.value == '')
    alert('Login não inserido')
    else if (senha.value == '')
    alert('Senha não inserida')
    else if (confirma.value == '')
    alert('Confirmação de senha não inserida')
}

function confirmar() {
    var senha = document.getElementById('senha')
    if (senha.value == confirma.value)
    confirma = confirma  
    else if (senha.value != confirma.value)   
    alert('Senha não corresponde')     
}

var senha = document.getElementById('senha')
function senhaValida(senha) {
     // const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,:?\^.,;?><:{}\[\]])[\w!@#$%&*()+\-.,;?\^.,;?><:{}\[\]]{6,12}$/;
    // console.log(regex.test(senha));
     // if (senha.value == true)
    // senha.value = senha
    //else if (senha.value == false)
    //alert('Senha Fraca Digite novamente')

    var retorno = false;
    var letrasmaius = /[A-Z]/;
    var letrasminus = /[a-z]/;
    var num = /[0-9]/;
    var carac = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    if(senha.value.length > 8){
        return retorno;
    }
    if(senha.value.length < 8){
        return retorno;
    }

    var auxmaius = 0;
    var auxminus = 0;
    var auxnum = 0;
    var auxcarac = 0;
    for( var i=0; i<senha.value.length; i++){
        if(letrasmaius.test(senha[i]))
        auxmaius++;
        else if(letrasminus.test(senha[i]))
        auxminus++;
        else if(num.test(senha[i]))
        auxnum++;
        else if(carac.test(senha[i]))
        auxcarac++;
    }
    if (auxmaius > 0){
    if (auxminus > 0){
    if (auxnum > 0){
    if (auxcarac > 0){
     retorno = true   
    }
    }    
    }    
    }
    if (retorno == false){
        alert('Senha fora do patrão')
    }
}
