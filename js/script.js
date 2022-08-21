//**********************************ALERTAS***************************************** */
document.getElementById("toEncrypt").focus();

Swal.fire({
    title: '<strong>Importante</strong>',
    icon: 'info',
    html:
        '<ul>  ' +  
            '<li>- Las mayúscula serán cambiada a minúscula.</li>'+
            '<li>- Los caracteres especiales serán eliminados.</li>'+
            '<li>- Los acentos serán eliminados.</li>'+
        '</ul> ',
    confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Ok',
    confirmButtonAriaLabel: 'Thumbs up, great!'
})

// ********************************ENCRIPTAR*******************************************
const getValueInput = () =>{
    let inputValue = document.getElementById("toEncrypt").value;

    //Sin Mayusculas
    let textClean = inputValue.toLowerCase();

    //Sin Caracteres Especiales
    let specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.\´\'\"\\\_\°\¡\¨\;";
    for (var i = 0; i < specialChars.length; i++) {
        textClean = textClean.replace(new RegExp("\\" + specialChars[i], "g"), "");
    }

    //Sin acentos
    textClean = textClean.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    let find = ["e","i","a","o","u"];
    let replace = ['enter','imes','ai','ober','ufat'];
    textClean = replaceStr(textClean, find, replace);

    //Verifica que no esté vacio el campo a encriptar
    function IsEmpty() {
        if (document.getElementById("toEncrypt").value.length == 0) {
          document.getElementById("toEncrypt").focus();
        return Swal.fire(
                    'Campo Vacío',
                    'Debe ingresar texto a Encriptar',
                    'error'
                );
        }else{
            replaceStr();
        }
    }
    
    IsEmpty();

    //Encripta
    function replaceStr(str, find, replace) {

        if (typeof find !== 'undefined') {
            for (let i = 0; i < find.length; i++) {
                str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
            }
            return str;
        }
        document.getElementsByTagName("h2")[0].innerHTML = "Resultado...";
        document.getElementById("img1").style.display = 'none'; 
        document.getElementById("encrypted").style.display = 'none';
        document.getElementById("encryptedT").style.display = 'block';
        document.getElementById("encryptedT").innerHTML = textClean;
        document.getElementById("buttons2").style.display = 'block';
    }
}

// ********************************DESENCRIPTAR*****************************************
const getValueEncrypted = () =>{
    let inputValue = document.getElementById("toEncrypt").value;

     //Sin Mayusculas
    let textClean = inputValue.toLowerCase();

    //Sin Caracteres Especiales
    let specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.\´\'\"\\\_\°\¡\¨\;";
    for (var i = 0; i < specialChars.length; i++) {
        textClean = textClean.replace(new RegExp("\\" + specialChars[i], "g"), "");
    }

    //Sin acentos
    textClean = textClean.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    //Desencripta
    let find = ['enter','imes','ober','ufat','ai'];
    let replace = ["e","i","o","u","a"];
    textClean = replaceStr(textClean, find, replace);

    //Verifica que no esté vacio el campo a Desencriptar
    function IsEmpty() {
        if (document.getElementById("toEncrypt").value.length == 0) {
          document.getElementById("toEncrypt").focus();
          return Swal.fire(
                    'Campo Vacío',
                    'Debe ingresar texto a Desencriptar',
                    'error'
                );
        }else{
            replaceStr();
        }
    }
    
    IsEmpty();
   
    function replaceStr(str, find, replace) {
        if (typeof find !== 'undefined') {
            for (let i = 0; i < find.length; i++) {
                str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
            }
            return str;
        }
        document.getElementsByTagName("h2")[0].innerHTML = "Resultado...";
        document.getElementById("img1").style.display = 'none'; 
        document.getElementById("encrypted").style.display = 'none';
        document.getElementById("encryptedT").style.display = 'block';
        document.getElementById("encryptedT").innerHTML = textClean;
        document.getElementById("buttons2").style.display = 'block';
    }
}

// *********************************COPIAR*******************************************
const copyText = () =>{
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        let content  = document.getElementById("encryptedT").innerHTML;
        navigator.clipboard.writeText(content).then(() => {
            Swal.fire(
                'Texto Copiado !',
                '',
                'success'
            );
        });
      }
    });  
}
