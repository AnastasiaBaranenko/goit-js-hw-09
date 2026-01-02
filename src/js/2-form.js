let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const keyForm = 'feedback-form-state';

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);
textData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(keyForm, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email == '' || formData.message == '') {
    alert(`Fill please all fields`);
  } else {
    console.log(formData);
    form.reset();
    formData = Object.fromEntries(new FormData(form));
    localStorage.removeItem(keyForm);
  }
}

function textData() {
  const newData = localStorage.getItem(keyForm);

  if (newData) {
    const dataForm = JSON.parse(newData);

    form.email.value = dataForm.email;
    form.message.value = dataForm.message;
    formData.message = dataForm.message;
    formData.email = dataForm.email;
  }
}
