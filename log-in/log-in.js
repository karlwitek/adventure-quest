import makeUser from './make-user.js';

const myForm = document.getElementById('user-form');


myForm.addEventListener('submit', (event) => {
    event.preventDefault();


    const formData = new FormData(myForm);

    const user = makeUser(formData);

    const stringyUser = JSON.stringify(user);

    localStorage.setItem('USER', stringyUser);
    




    console.log(form.get('class'), form.get('name'));

});

