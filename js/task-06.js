const inputValidation = document.querySelector('input');

   inputValidation.addEventListener('blur', () => {
         if (inputValidation.value.length === Number(inputValidation.dataset.length)) {
           inputValidation.className = 'valid';
           } else { 
           inputValidation.className = 'invalid';
    }

});

