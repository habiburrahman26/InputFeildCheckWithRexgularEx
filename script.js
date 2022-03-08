document.querySelector('.btn-submit').addEventListener('click', function () {
  const errMsg = document.querySelector('#errorMsg');
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const inputEmail = document.querySelector('#email');

  errMsg.textContent = '';
  errMsg.className = '';
  if (inputEmail.value === '') {
    errMsg.textContent = "Email is can't be empty!";
    errMsg.classList.add('text-danger');
  } else if (re.test(inputEmail.value)) {
    errMsg.textContent = 'Email is valid';
    errMsg.classList.add('text-success');
  } else {
    errMsg.textContent = 'Email is invalid!';
    errMsg.classList.add('text-danger');
  }
});
