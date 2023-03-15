//REGOLE PER PASSWORD

let psw = document.querySelector('#psw');
let show = document.querySelector('.fa-lock');

show.onclick = function () {
  if (psw.type === 'password') {
    psw.setAttribute('type', 'text');
    show.classList.add('hide');
  } else {
    psw.setAttribute('type', 'password');
    show.classList.remove('hide');
  }
}

const passwordInput = document.getElementById("psw");
const passwordCount = document.querySelector(".psw-contain");
const errorContainer = document.querySelector(".container-error-psw");

passwordInput.addEventListener("blur", function () {
  const password = passwordInput.value;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasMinimumLength = /.{8,}/.test(password);
  let message = "";

  if (!(hasUppercase && hasLower && hasNumber && hasMinimumLength)) {
    message += `la password deve ${!hasUppercase ? 'contenere almeno una lettera maiuscola, ' : ''}
    ${!hasLower ? 'contenere almeno una lettera minuscola, ' : ''}
    ${!hasNumber ? 'contenere almeno un numero, ' : ''}
    ${!hasMinimumLength ? 'avere una lunghezza minima di 8 caratteri, ' : ''}`;
    message = message.replace(/,\s*$/, '');
    passwordInput.classList.remove('valid');
  } else {
    passwordInput.classList.add('valid');
  }
  passwordCount.textContent = message;
});

//REGOLE PER E-MAIL
const emailInput = document.getElementById("mail");

emailInput.addEventListener("input", function () {
  const mail = emailInput.value;
  const hasCarSpecial = /.*@.*\..*/.test(mail);

  if (hasCarSpecial) {
    passwordCount.textContent = "";
  }else{
    passwordCount.textContent = "formato mail non corretto";
  }
});


/*FUNZIONE CHE CONTROLLA SE I CAMPI IMPUT SONO VUOTI E SE LO SONO NASCONDONO I MESSAGGI DI ERRORE*/
const inputElements = document.querySelectorAll("input");

function checkInputs() {
  let allEmpty = true;
  inputElements.forEach(function(inputElement) {
    if (inputElement.value !== "") {
      allEmpty = false;
    }
  });
  if (allEmpty) {
    errorContainer.classList.add("hidden");
  } else {
    errorContainer.classList.remove("hidden");
  }
}

inputElements.forEach(function(inputElement) {
  inputElement.addEventListener("blur", function() {
    checkInputs();
  });
});