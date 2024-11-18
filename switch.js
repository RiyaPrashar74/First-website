function fun1(user){

switch(user){
case 'admin':
    console.log('admin') 
    break;

case 'subadmin':
    console.log('subadmin') 
    break;

default : console.log('get lost')

}

}


var user = 'admin';

fun1(user);