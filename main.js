window.onload = function() {
    var callButton = document.getElementById('button1');
    var closeButton = document.querySelector('.close');
    var form1 = document.querySelector('.form1');
    var submitButton = document.querySelector('input[type="submit"]');
    var message = document.querySelector('.message');
    var fio = document.querySelector('input[name="fio"]');
    var phone = document.querySelector('input[name="phone"]');
    var inputs = document.querySelectorAll('input[type="text"]');
        
    
    submitButton.addEventListener('click', checkForm);
    callButton.addEventListener('click', showForm);
    closeButton.addEventListener('click', closeForm);
    phone.addEventListener('focus', phoneNumb);
    
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', fieldValidate);
    }
    
    function showForm() {
        form1.classList.remove('hidden-form');
    }
    
    function closeForm() {
        form1.classList.add('hidden-form');
    }
    
    function checkForm(e) {
        var flag = true;
        
        if(fio.value == "" || fio.value.length < 2) {
            message.innerHTML = "Вы не указали имя<br>";
            flag = false;
        }
        if(phone.value === '' || phone.value ==='+375') {
            message.innerHTML += "Вы не указали телефон<br>";
            flag = false;
        }
        
        if(!flag) {
            e.preventDefault();
        }
    }
    
    function phoneNumb() {
        if(this.value === '') {
            this.value = '+375';
        }  
        if(this.value.length < 5) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    }
    
    function fieldValidate(e) {
        var thisElement = e.currentTarget;
        var errorCount;
        if(thisElement.name == 'fio') {
            errorCount = 3;
        } else if(thisElement.name == 'phone') {
            errorCount = 13;
        }
        if(thisElement.value.length < errorCount) {
            thisElement.classList.add('error');
        } else {
            thisElement.classList.remove('error');
        }
    }
}
