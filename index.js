// var btn = document.getElementById('btn');
// // 事件源 事件类型 事件处理程序
// // 事件源：ID为'btn'的按钮标签，指要做这个事件的标签。
// // 事件类型：事件的名称，如鼠标点击、鼠标经过、键盘敲击。
// // 事件处理程序：这个事件的结果，如弹出对话框、控制台输出。

// btn.onclick = function() {
//     alert('你点错啦！');
// }

// var ling = document.getElementById('ling');

// ling.onmouseenter = function() {
//     alert('aaaaaaa');
//     var a = new Array();
//     for (var i = 0; i <= 90; i++) {
//         a.push(i);
//     }
//     console.log(a);
// }
// console.log(isNaN('123'));
// var c=[1,]

// var arr = new Array();
// // while (i < 2.80) {
// //     i = i + 0.20;
// //     var a = i / 8.68;
// //     a = a.toFixed(5);
// //     arr.push(a);
// // }
// // console.log(arr);

// function letArray(array, target) {
//     var array1 = new Array();
//     for (var i = 0; i <= array.length - 1; i++) {
//         for (var j = i + 1; j <= array.length - 1; j++) {
//             var middle = new Array();
//             if (array[i] + array[j] === target) {
//                 array1.push(i, j);
//                 middle.push(array[j]);
//             }
//         }
//     }
//     return array1;
// }
// arr = [1, 5, 6, 9, 8, 2, 3, 3, 5, 1, 2, 4];
// var b = letArray(arr, 6);
// console.log(b);
// var max = 0x7fffffff;

// function re(k) {
//     if (k < -1 * (max + 1) || k > max) {
//         return 0;
//     }
//     var we = parseInt(k);
//     var setArray = we.toString();
//     var len = setArray.length;
//     var arr = new Array();
//     for (var j = 0; j < len; j++) {
//         arr.push(setArray[j]);
//     }
//     var n = arr.length;
//     for (var i = 0; i < n / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[n - 1 - i];
//         arr[n - 1 - i] = temp;
//     }
//     return arr;
// }
// var a = 123;
// re(a);
// var max = 0x7fffffff;
// function reverse(k) {
//     if(k>max||k<-1*(max+1)){
//         return 0;
//     }
//     var we = parseInt(k);
//     var setArray = we.toString();
//     var len = setArray.length;
//     var arr = new Array();
//     var setNum=0;
//     for (var j = 0; j < len; j++) {
//         arr.push(setArray[j]);
//     }
//     var n = arr.length;
//     for (var i = 0; i < n / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[n - 1 - i];
//         arr[n - 1 - i] = temp;
//     }
//     for(var s=0;s<n;s++){
//         var x =Math.pow(10,n-1-s)
//         var setNumTemp=arr[s]*x;
//         setNum+=setNumTemp;
//     }
//     return setNum;
// }
// var a = 123;
// reverse(a);
// 备份
/*
var max = 0x7fffffff;
var inputNum = 0;

function reverse(k) {
    if (k > max || k < -1 * (max + 1)) {
        return 0;
    } else if (k >= 0) {
        console.log('是整数');
        inputNum = k;
    } else if (k < 0) {
        inputNum = -k;
    }
    var we = parseInt(inputNum);
    var setArray = we.toString();
    var arr = new Array();
    var setNum = 0;
    for (var j = 0; j < setArray.length; j++) {
        arr.push(setArray[j]);
    }
    var n = arr.length;
    for (var i = 0; i < n / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    for (var s = 0; s < n; s++) {
        var x = Math.pow(10, n - 1 - s)
        var setNumTemp = arr[s] * x;
        setNum += setNumTemp;
    }
    if (k >= 0) {
        return setNum;
    } else if (k < 0) {
        return -setNum;
    }
}
var a = 123;
reverse(a);
*/
// function isPalindrome(x) {
//     var setInt = x.toString();
//     var setArray = new Array();
//     var i = 0;
//     if (x == 0) {
//         return true;
//     }
//     if (x > 0 && x % 10 != 0) {
//         while (i < setInt.length) {
//             setArray[i] = setInt[i];
//             i++;
//         }
//         let arr1 = setArray.toString();
//         var setArray1 = setArray.reverse();
//         var arr = setArray1.toString();
//         if (arr === arr1) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }
// var a = 123;
// isPalindrome(a);

// function Luoma(I,V,X,L,C,D,M){
//     this.I=1;
//     this.V=5;
//     this.X=10;
//     this.L=50;
//     this.C=100;
//     this.D=500;
//     this.M=1000;
// }
// let a=new Luoma();

// var luoma = new Object();
// Luoma={
//     I:1,
//     v:5,
// }
// function onClock() {
//     let onput = prompt('输一个数');
//     let onput1 = prompt('第二个');
//     let p = '你是' + (onput + onput1);
//     alert(p);
// }
// let ling = document.querySelector('#ling');
// let lingAll = document.querySelectorAll('#ling');
// let allLi = document.getElementById('ling');
// let body = document.body;
// let htmlEle = document.documentElement;
// console.log(lingAll);
// console.dir(body);
// let btn2 = document.getElementById('btn');
// let btn = document.querySelector('#btn');
// btn2.onclick = function() {
//     // btn2.innerHTML = '<p style="color:blue;">这是表情</p>';
//     alert('这是一个按钮！');
//     btn2.style.display = 'none';
//     console.log('这是一个按钮！');
// }
// let textInput = document.querySelector('.textInput');
// textInput.onfocus = function() {
//     // 得到焦点
//     if (this.value === '阿伟死了！') {
//         this.value = '';
//         this.style.borderColor = 'pink';
//     }
// }
// textInput.onblur = function() {
//     // 失去焦点
//     if (this.value === '') {
//         this.value = '阿伟死了！';
//         this.style.borderColor = 'blue';
//     }
// }

// let tabels = document.querySelector('tbody tr');

// for (let i = 0; i < tabels.length; i++) {
//     tabels[i].onmouseover = function() {
//         this.style.borderColor = 'blue';
//         console.log('jskka');
//     }
// }

// let arr = new Array(12, 12, 33, 12, 12, 32, 4, 333);

// alert(arr.push(12));
// alert(Array.isArray(arr));
// alert(arr.toString());


let j_cbAll = document.getElementById('j_cbAll');
let j_tbs = document.getElementById('j_tb').getElementsByTagName('input');
var tb_tr = document.getElementById('j_tb').getElementsByTagName('tr');
// 注册事件
j_cbAll.onclick = function() {
    for (let i = 0; i < j_tbs.length; i++) {
        j_tbs[i].checked = this.checked;
    }
}

for (let i = 0; i < j_tbs.length; i++) { //为每个j_tbs中的复选框注册点击事件
    j_tbs[i].onclick = function() {
        let temp = true; //状态控制元素
        for (let j = 0; j < j_tbs.length; j++) { //遍历每个复选框
            if (!j_tbs[j].checked) {
                temp = false;
            }
        }
        j_cbAll.checked = temp;
    }
}

for (var i = 0; i < tb_tr.length; i++) {
    tb_tr[i].onmouseover = function() {
        //this.className = 'clickTr';
        this.className = 'clickTr';
    }
    tb_tr[i].onmouseout = function() {
        this.className = '';
    }
}

//闭包
function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}
wait('Hello,closure!');