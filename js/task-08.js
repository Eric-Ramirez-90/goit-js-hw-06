const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === '' || password.value.trim() === '') {
    alert('Please fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);

    event.currentTarget.reset();
  }
}
