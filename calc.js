
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
