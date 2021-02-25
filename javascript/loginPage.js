window.onload = function (){
    var btnLogin = document.getElementById('loginBtn')
    btnLogin.onclick = function(){
        let usern = document.getElementById('username')
        let passw = document.getElementById('password')
        if(usern.value)
        {
            console.log(usern.value, passw.value)
        }
    }
}