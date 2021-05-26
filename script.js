function validation(){

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var fnamecheck = /^[A-Za-z.  ]{3,30}$/ ;
    var lnamecheck = /^[A-Za-z.  ]{3,30}$/ ;
    var passwordcheck = /^[a-zA-Z0-9!!@#$%^&*]{8,16}$/
    var emailcheck = /^[A-Za-z0-9_]{3,}@[.A-Za-z-]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var mobilecheck = /^[0][1][3456789][0-9]{8}$/;
    


    if(fnamecheck.test(fname)){
        document.getElementById('fnameerror').innerHTML = " ";
    }
    else{
        document.getElementById('fnameerror').innerHTML = "** First Name is invalid!"
        return false;
    }

    if(lnamecheck.test(lname)){
        document.getElementById('lnameerror').innerHTML = " ";
    }
    else{
        document.getElementById('lnameerror').innerHTML = "** Last Name is invalid!"
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }
    else{
        document.getElementById('emailerror').innerHTML = "** Email is invalid!"
        return false;
    }

    if(mobilecheck.test(mobile)){
        document.getElementById('mobileerror').innerHTML = " ";
    }
    else{
        document.getElementById('mobileerror').innerHTML = "** Number is invalid!"
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML = " ";
    }
    else{
        document.getElementById('passworderror').innerHTML = "** Password is invalid!"
        return false;
    }

    if(cpassword.match(password)){
        document.getElementById('cpassworderror').innerHTML = " ";
    }
    else{
        document.getElementById('cpassworderror').innerHTML = "** Password does not match!"
        return false;
    }





}