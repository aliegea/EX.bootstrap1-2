
//Validació formulario suscripció
const form = document.getElementById("myFormRg");
 form.classList.remove('is-invalid');

function checkInputs(){
  
 const user=document.getElementById("userName");
 const email=document.getElementById("inputEmail");
 const password=document.getElementById("password");
 const password2=document.getElementById("password2");
 const province=document.getElementById("inputProvince");
 const check=document.getElementById("gridCheck")
  let errores=0
  const usuarioValor=user.value.trim();
  const emailValor=email.value.trim();
  const passwordValor=password.value.trim();
  const passwordValor2=password2.value.trim();
  const provinceValor=province.value;
 
  if(usuarioValor===""||usuarioValor.length<4 ){
    user.classList.add("is-invalid");
    document.getElementById("ErrorUsuario").innerHTML="Escribe un nombre de usuario de al menos 4 caracteres";
    errores++
  }
  if(emailValor===""){
    email.classList.add("is-invalid");
    document.getElementById("errorEmail").innerHTML="Este campo es obligatorio";
    errores++
  }
  else if(!validarEmail(emailValor)){
    	email.classList.add("is-invalid");
      document.getElementById("errorEmail").textContent = "El email no cumple el formato";
    	errores++;
  }
  if(passwordValor === "") {
    	password.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
    errores++;}
  else if(!validarContraseña(passwordValor)){
    password.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent = "La contraseña debe tener 8 caracteres, una mayuscula, una minúscula y un número"
    errores++;
  }
    	
      if(passwordValor2 !== passwordValor) {
        password2.classList.add("is-invalid");
      document.getElementById("errorPassword2").textContent = "La contraseña no coincide"
      errores++;
        }
   if(provinceValor === ""||provinceValor ==="Selecciona una Provincia") {
      province.classList.add("is-invalid");
    document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
        	errores ++;}
    if(!gridCheck.checked) {
    check.classList.add("is-invalid");
    document.getElementById("errorCheck").textContent = "Acepta las bases";
    errores++;
            	}      
  
 if (errores > 0){
      return false;
      }else{
    return true;
}
}
form.addEventListener('blur', (event) => {
  console.log(event);
  if(event.target.value!='') event.target.classList.remove('is-invalid');
  checkInputs();
  }, true);


function validarEmail(email) {
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	return regex.test(email) ? true : false;
   }

function validarContraseña (pass){
  const regexP= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  return regexP.test(pass) ? true : false;
}

//validació log in

const form2 = document.getElementById("loGin");
function checkInputs2(){
  
const userMail=document.getElementById("userMail");
const logPassword=document.getElementById("loginPassword");

  let errores=0
  
  const logEmail=userMail.value.trim();
  const logPass=logPassword.value.trim();
  if(logEmail===""){
    userEmail.classList.add("is-invalid");
    document.getElementById("errorLogin").innerHTML="Este campo es obligatorio";
    errores++
  }
  else if(!validarEmail(logEmail)){
    	userMail.classList.add("is-invalid");
      document.getElementById("errorLogin").textContent = "El email no cumple el formato";
    	errores++;
  }
  if(logPass === "") {
    	logPassword.classList.add("is-invalid");
    document.getElementById("errorLoginPas").textContent = "Es campo es obligatorio";
    errores++;
    	}
      if (errores > 0){
        return false;
        }
        else{
      return true;}
}

form2.addEventListener('blur', (event) => {
  console.log(event);
  if(event.target.value!='') event.target.classList.remove('is-invalid');
  checkInputs2();
  }, true);

  
// validacio search bar
const form3 = document.getElementById("searchForm");
const search=document.getElementById("mySearch");

function checkInputs3(){

  const searchText=search.value.trim();
  if(searchText.length<3){
    search.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent="Introduce más de 3 caracteres"
    return false;}
    else{
      return true;
    }
  }


form3.addEventListener('blur', (event) => {
  console.log(event);
  if(event.target.value!='') event.target.classList.remove('is-invalid');
  checkInputs3();
  }, true);