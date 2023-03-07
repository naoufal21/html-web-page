var aaa = true;
var bbb = true;
var ccc = true;


function checking(test) {
  var maj = /[A-Z]+/;
  var low = /[a-z]+/;
  var number = /[0-9]/;
  var sym = /[-+*/]/;
  var length = test.value.length;
  var checks = test.value;
  
  if(document.getElementById("p").value.length == 0) {
    return true;
  }
  
   if ( maj.test(checks)== false) {
    alert("password must contain at least one upper case");
    return false;
  } 
  if ( low.test(checks)== false) {
    alert("password must contain at least one lower case");
    return false;
  } 
   if (length < 6 || length >12 ) {
    alert("password must be between 6 and 12 characters"); 
    return false;
  }
  if (number.test(checks)==false) {
    alert("password must contain one number");
    return false;
  } 
   if (sym.test(checks)==false) {
    alert("password must contain one of these symbols +-*/ ");
    return false;
  }  
  
}


function login(test) {
    
    var length = test.value.length;
    var checks = test.value;
    var user = /[^a-z0-9]/

    if(document.getElementById("test").value.length == 0) {
   
      return true;
    }
    if (length < 4 || length >8 ) {
        alert("Username must be between 4 and 8 characters")
       return false;
    }
    if (user.test(checks)==true) {
      alert("username can only contain lower case ASCII characters and numbers")
      return false;
    }
    else { 
      return true;
    }
}


function dni(test) {
var length = test.value.length;
var checks = test.value;
var first = /[0-7]/;
var dni = /[0-9]{8}/;
var last = /[a-zA-Z]/;
if(document.getElementById("s").value.length == 0) {
  return true;
}
if (first.test(checks[0])==false) {
  alert("Dni first number must be between 0 and 7");
  return false;
}  
if (dni.test(checks)==false ) {
  alert("The DNI format is 8 digits followed by a letter (example: 12345678A)");
  return false;
}  
if (last.test(checks[8])==false || length > 9 ) {
  alert("The DNI format is 8 digits followed by a letter (example: 12345678A)");
  return false;
}  

}

function toggle(source) {
  checkboxes = document.getElementsByName('check');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = true;
   
  }
}

function untoggle(source) {
  checkboxes = document.getElementsByName('check');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = false;
   
  }
}

function dateoftoday() {
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  hour = date.getHours();
  min = date.getMinutes();
  var  CodeName = navigator.appName ;
  var  Name=  navigator.appName ;
  var  Version = navigator.appVersion ;
  var Platform = navigator.platform ;
  var User =navigator.userAgent;
  var txt= "codename:" + CodeName  + "Name:"+ Name + "Version" +Version + "Platform"+ Platform+ "User:"+ User;
 




  document.getElementById("example").value=txt;

  document.getElementById("current").value = month + "/" + day + "/" + year + "   " + hour+ ":"+min ;


  if (document.getElementById("get").checked) {
  var a = "get";

  document.getElementById("form").method = a;
  }
  else if (document.getElementById("post").checked){
  var a = "post";
  
 document.getElementById("form").method = a;
  }


  if (document.getElementById("application").checked) {
    var b = "application/x-www-form-urlencoded";
  
    document.getElementById("form").enctype = b;
    }
    else if (document.getElementById("multipart").checked){
    var b = "multipart/form-data";
    
   document.getElementById("form").enctype = b;
    }

if(login(document.getElementById('test')) == false ||checking(document.getElementById('p'))==false || dni(document.getElementById('s')) ==false ) {
  return false;
}

     




return true;
}


