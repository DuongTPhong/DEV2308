var userList = [
  { 
    username: 'admin', 
    password: '123' 
  },
  { 
    username: 'user1', 
    password: 'pass1' 
  },
];

function checkLogin() {
  var enUsername  = document.getElementById("user").value;
  var enPassword  = document.getElementById("pass").value;  

  if(user.value != "") {

  } else{
    alert("Vui lòng nhập tên đăng nhập");
    user.focus();
    return false;
  }
  if(pass.value != "") {
    
  } else{
    alert("Vui lòng nhập mật khẩu");
    pass.focus();
    return false;
  }
  var userFound = userList.find(user => user.username === enUsername
     && user.password === enPassword);

  if (userFound) {
    alert('Đăng nhập thành công!');
  } else {
    alert('Đăng nhập thất bại. Kiểm tra lại thông tin đăng nhập!');
  }
}

