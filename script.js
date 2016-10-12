"use strict";
console.clear();

var values = [];
var values_str = "";

function reply_click(clicked_id)
{
    /* values_str = values_str + clicked_id; // same as values_str += clicked_id; */

    values_str += clicked_id;
    console.log(values_str);
    document.querySelector('.result').innerHTML = values_str;

}

// function showInput() {
//         document.getElementById('display').innerHTML =
//                     document.getElementById("user_input").value;
//     }


function add_cb(n1, n2) {
  return n1 + n2;
}

function sub_cb(n1, n2){
  return n1 - n2;
}

function div_cb(n1, n2){
  return n1 / n2;
}

function mlt_cb(n1, n2){
  return n1 * n2;
}

function mod_cb(n1, n2){
  return n1 % n2;
}

// set with call from the "="
function onEqual () {
  console.log("onEqual called");
  values = values_str.split(" ");
  let n1 = parseFloat(values[0]);
  let n2 = parseFloat(values[2]);
  if (values[1] == "+") {
    j_cal(n1,n2,add_cb);
    console.log(j_cal(n1,n2,add_cb));
    document.querySelector('.result').innerHTML = j_cal(n1,n2,add_cb);
  }
  if (values[1] == "-") {
    j_cal(n1,n2,sub_cb);
    console.log(j_cal(n1,n2,sub_cb));
    document.querySelector('.result').innerHTML = j_cal(n1,n2,sub_cb);
  }
  if (values[1] == "/") {
    j_cal(n1,n2,div_cb);
    console.log(j_cal(n1,n2,div_cb));
    document.querySelector('.result').innerHTML = j_cal(n1,n2,div_cb);
  }
  if (values[1] == "*") {
    j_cal(n1,n2,mlt_cb);
    console.log(j_cal(n1,n2,mlt_cb));
    document.querySelector('.result').innerHTML = j_cal(n1,n2,mlt_cb);
  }
  if (values[1] == "%") {
    j_cal(n1,n2,mod_cb);
    console.log(j_cal(n1,n2,mod_cb));
    document.querySelector('.result').innerHTML = j_cal(n1,n2,mod_cb);
  }
}

function j_cal(n1,n2,cb){
  return cb(n1,n2);
  console.log(cb(n1,n2));
}

// console.log(add_cb(1,2)); // done
// console.log(sub_cb(1,2)); // done
// console.log(div_cb(1,2)); // done
// console.log(mlt_cb(1,2)); // done
// console.log(mod_cb(1,2)); // done
//
