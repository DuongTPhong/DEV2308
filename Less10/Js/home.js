// 1, biến
// khai báo: số, chuỗi, ngày tháng, ...
// int x = 5 
// var tên_biến = 10
// giá_trị => quy định kiểu dữ liệu của biến
// value = số ==> datatype: số
// value = chuỗi ==> datatype: chuỗi
// var a1 = 100; // a1 có kiểu dữ liệu dạng số
// var a2 = "dev"; // a2 có kiểu dữ liệu dạng chuỗi

// // 2, Toán tử
// // các phép số học: +, -, *, /, %

// var x1 = 10;
// var x2 = 50;
// var x3 = x1 + x2;

// // ==> quy tắc phép cộng:
// // số + số ===> số
// // chuỗi + chuỗi ===> chuỗi
// // chuỗi + số ===> chuỗi: 10 + '50' = '10' + '50' = '1050'

// console.log("giá trị của x3=",  x3);
// console.log("giá trị của x3=" +  x3);

// // các phép toán logic
// // so sánh: ==, >, <, <=, >=, ===
// // điều kiện: &&, ||, !

// // Khai báo hai số nguyên bất kỳ, tính hiệu số lớn - số bé

// // 2, Cấu trúc điều kiện
// // if - else ; swich - case
// // cú pháp: đầy đủ, khuyết thiếu, if lồng

// // if(điều kiện) {
// //      ...các câu lệnh js sẽ được thực thi nếu điều kiện = true...
// // } else {
//     // ...các câu lệnh js sẽ được thực thi nếu điều kiện = false...
// // }

// var st1 = 50;
// var st2 = 100;
// if(st1 > st2){
//     hieu = st1 - st2;
//     console.log("hiệu hai số là: " + st1 + '-' + st2 + '=' + hieu);
// }else{
//     hieu = st2 - st1;
//     console.log("hiệu hai số là: " + st2 + '-' + st1 + '=' + hieu);

// }
// // console.log("hiệu hai số là: ", hieu);

// //BT1: biện luận phương trình bậc nhất 1 ẩn: a*x + b = 0 với mọi a
// var a = 10;
// var b = 100;

// if(a==0){
//     //0*x + b = 0
//     if(b==0){
//         console.log("phương trình có vô số nghiệm");
//     }else{
//         console.log("phương trình vô nghiệm");
//     }
// }
// else{
//     console.log("phương trình có một nghiệm:", -b/a);
// }


// //khai báo ba c1, c2, c3 là ba cạnh của một tam giác
// // biện luận các trường hợp của tam giác

// var c1= 3;
// var c2= 4;
// var c3= 5;

// if((c1 + c2 > c3) && (c1 + c2 + c3 > c1)) // kiểm tra điều kiện 3 cạnh là của 1 tam giác
// {
//     if( c1==c2 && c2==c3){
//         console.log("tam giác đều")
//     }else{
//         if((c1*c1 + c2*c2 == c3*c3) || (c1*c1 + c3*c3 == c2*c2) || (c2*c2 + c3*c3 == c1*c1)){
//             if (c1 == c2 || c2 == c3 || c1 == c3) {
//                 console.log("tam giác vuông cân");
//             }else{
//                 console.log("tam giác vuông");

//             }
//         }
//         else{
//                 if (c1 == c2 || c2 == c3 || c1 == c3) {
//                 console.log("tam giác cân");
//             }else{
//                 console.log("tam giác thường");
//             }
//         }
//     }
// }
// else
//     console.log("ba cạnh ko thuộc tam giác ");

// //btvn2: biện luận pt bậc 2 một ẩn: a*x2 + b*x +c = 0 với mọi a

// //swich - case
// // vòng lặp và mảng
// // for ; while , do - while
// // cú pháp
// // for(đếm ; điều_kiện ; hành động) {
// //           thân for: js
// // }

// //thứ tự for:
// //b1: khởi tạo biến đếm
// //b2: check điều kiện:
// //          điều kiện đúng : thực thi thân for = > chạy hành động => quay trở lại b2
// //          điều kiên sai  : dừng for / kết thúc

// var von = 10;
// for(var i = von; i > 0; i--){
//     console.log("còn đánh được");
// }
// console.log("hết vốn rồi, vốn = 0");

// for(var i =1; i <= 10; i++){
//     console.log(i);
// }


// // mảng:
// // khái niệm: tập các phần tử (bất kỳ)
// // đặc điểm: mỗi phần tử được đánh index từ 0 cho tới cuối -1
// //           tương tác với các phần tử qua index: tên_mảng[index]
// // Khai báo:
//     var array1 = new Array();
//     var array2 = [1, 2, 3, '4', "5", "7"];
//     console.log("Phần tử có index = 4 có giá trị là: ", array2[4]);
//     var x1 = array2[2]; // x1 = 3
//     var x2 = array2[3]; // x2 = '4'

//     console.log("Phần tử có index = 4 có giá trị là: ", array2[1]);

//     for(var i =0; i < array2.length; i++){
//         console.log(array2[i]);
//     }

//     var arr = [1, 5, 15, 20, 68, 70];
// // log ra các số lẻ trong mảng arr
// for(var i =0; i < arr.length; i++){
//     if(arr[i] %2 !=0){
//         console.log('test arr:', arr[i]);
//     }
// }

// //bt: cho mảng số bất kỳ, yêu cầu tính tổng tất cả các giá trị trong mảng
// var arrNumber = [1, 2, 3, '8', "6", "7"];
// var sum = "0";
// for (var i =0; i < arrNumber.length; i++) {
//     sum = parseInt(sum) + parseInt( arrNumber[i]); 
// }
// console.log('tổng của mảng arrNumber là: ', sum);

    
// //btvn: tính tích tất cả các phần tử (convert về số)

// let product = 1;

// for (let i = 0; i < arrNumber.length; i++) {
//   const num = parseFloat(arrNumber[i]);

//   if (!isNaN(num)) {
//     product *= num;
//   }
// }

// console.log(`Tích của tất cả các phần tử (sau khi chuyển đổi thành số) là: ${product}`);




// //      tính tổng và tích các phần tử ở vị trí chẵn

// let sumEven = 0;
// let productEven = 1;

// for (let i = 0; i < arrNumber.length; i++) {
//    num = parseFloat(arrNumber[i]);
  
//   if (!isNaN(num)) {   
//     if (i % 2 === 0) { 
//       sumEven += num;
//       productEven *= num;
//     }
//   }
// }

// console.log(`Tổng các phần tử ở vị trí chẵn là: ${sumEven}`);
// console.log(`Tích các phần tử ở vị trí chẵn là: ${productEven}`);

// //btvn2.0: triển khai ví dụ về swich-case/if-else (số ngày trong năm/tháng)
// function daysInMonthSwitch(month, year) {
//     switch (month) {
//       case 1: 
//       case 3:
//       case 5: 
//       case 7: 
//       case 8: 
//       case 10: 
//       case 12: 
//         return 31;
//       case 4: 
//       case 6: 
//       case 9: 
//       case 11: 
//         return 30;
//       case 2: 
//         if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//           // Nếu là năm nhuận 
//           return 29;
//         } else {
//           return 28;
//         }
//       default:
//         return -1;
//     }
//   }
  
//   const month = 2; 
//   const year = 2024; 
//   const days = daysInMonthSwitch(month, year);
//   if (days !== -1) {
//     console.log(`Tháng ${month} năm ${year} có ${days} ngày.`);
//   } else {
//     console.log(`Tháng ${month} không hợp lệ.`);
//   }
  

// end less 09

//-----------------------------------------------------------------------------------------------

// start less 10
// biến
// toán tử
// mảng: array
// định nghĩa: 'tập hợp các phần tử'
// đánh dấu từ 0 => length-1
// tương tác: qua index
// các hàm tương tác với array: push(), pop(),...

var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 5];
// yêu cầu: khai báo một số bất kỳ, và tìm vị trí số đó trong mảng array3
var x4 = 10;
var temp = false
for(let j = 1; j <= array3.length ; j++) {
  if(parseInt(x4) === parseInt(array3[j-1])){
    console.log("giá trị " + x4 + " tồn tại ở vị trí thứ " + j)
    temp = true
  }
}
if(!temp == false){
  console.log("giá trị " + x4 + " không tồn tại trong array3");
}


// hàm: function:
function ten_ham(tham_so_dau_vao){
  // thân hàm
}

// sử dụng hàm:
ten_ham(1)

function summary(a, b){
  var totalAB = parseInt(a) + parseInt(b);
  console.log('tổng hai tham số đầu vào là:', totalAB);
}
summary(15,"50"); //==> 1550
summary(10,20, 50);


// các tham số đầu vào có kiểu dữ liệu: tự định nghĩa 
// tham số 1 <==> input 1
// tham số n <==> input n


function filter(x5){
  var temp2 = false;
  for(let j = 1; j <= array3; j ++) {
    if(parseInt(x5) === parseInt(array3[j-1])){
      console.log("giá trị " + x5 + " tồn tại ở vị trí thứ " + j)
      temp2= true
    }
  }
  if(!temp2){
    console.log("giá trị " + x5 + " không tồn tại trong array3");
  }
}
filter(100); 

var arrDemo = ["anc", 'dev', 123, '78874', "js"];
//btvn: viết 1 hàm tìm kiếm trong tập dữ liệu có sẵn bất kỳ,
// kiểm tra xem giá trị đầu vào xuất hiện bao nhiêu lần, ở đâu \
// nếu ko tồn tại ==> in ra: no data;

// -----------------emd function------------------------------------


// đối tượng: object

// tập hợp thuộc tính ==> đối tượng
// khai báo:
var obj1 = {}
var obj2 = new Object();
obj2.chieu_cao = 171;
obj2.can_nang = 55;
obj2.que_quan = "Việt Nam";
obj2.gioi_tinh = "Nam"

var obj3 = {
  chieu_cao : 172,
  can_nang  : 60,
  que_quan  : 'hà nội',
  dan_toc : 'Kinh'
}

// array object : JSON
var n1 = {
  chieu_cao : 172,
  can_nang  : 60,
  que_quan  : 'hà nội',
  dan_toc : 'Kinh'
};
var n2 = {
  chieu_cao : 172,
  can_nang  : 62,
  que_quan  : 'hà nội',
  dan_toc : 'Kinh'
};
var n3 = {
  chieu_cao : 172,
  can_nang  : 63,
  que_quan  : 'hà nội',
  dan_toc : 'Kinh'
};
var arrObj = [n1, n2, n3] // <==> [1, 2, 3]
n3.can_nang // ==> 63
arrObj[2].can_nang // n3.can_nang


function search(text, number){
  var check = false;
  for(let i=0; i<= arrObj; i++){
    if(text.toLowerCase() == arrObj[i].que_quan.toLowerCase && number < arrObj[i].chieu_cao){
      console.log('có tồn tại người quê ở ', text);
      check = true;
    }
  }
  if(!check) console.log('Không tồn tại người quê ở ', text);
}
search('hà nội');
search('Hà Nội');


//--------------end object----------------------


// start DOM
// khái niệm & mục đích
// Phân loại Dom
// Syntax using DOM
// DOM ELEMENT
// DOM  id
// DOM class
// DOM ...


function showValueInput(){
  var y = document.getElementById('username').value;
  console.log("demo username: ", y);
}

var listProduct = [
  {
    id:4,
    name: "đồng hồ",
    price: 200000,
    cate: 1
  },
  {
    id:2,
    name: "nhẫn",
    price: 100000,
    cate: 3
  },
  {
    id:3,
    name: "điện thoại",
    price: 500000,
    cate: 4
  },
  {
    id:4,
    name: "quần áo",
    price: 600000,
    cate: 4
  }
];

function searchProduct(){
  var name = document.getElementById('productName').value;
  if(name == '') {
    alert("giá trị không được để trống");
    return;
  }
  var tempProduct = false;
  for(let i=0; i< listProduct.length; i++){
    if(listProduct[i].name == name){
      console.log("tồn tại phần tử trùng tên ", listProduct[i]);
      tempProduct = true
    }
  }
  if(!tempProduct) console.log("no data");
}


//btvn: tạo listUser (array object)
// dùng lại form đăng nhập 
// bắt sự kiện khi click button đăng nhập => lấy ra giá trị 2 ô input username, password
// so sánh giá trị người dùng nhập với tập dữ liệu listUser
// nếu có tồn tại ==> ....
// nếu ko tồn tại ==> ....
// nếu người dùng ko nhập vào một trong hai (hoặc là để trống cả hai) ô input => thông báo: 

// lưu ý về biến:
// phạm vi của biến: local - global : cục bộ - toàn cục