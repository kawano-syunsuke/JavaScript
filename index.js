//変数
let unko = 'Hello world';

//定数
const bigunko ='Hello World!!';

let inoki = ['いーち','にーい','さーん','だー！！'];

//console.log(inoki[1]);

//let index = 0;
//while(index < inoki.length){
//  console.log(inoki[index]);
 // index++;

//}
//if(inoki.length > 5){
 // console.log('ボンバイエ');
//}else{
 // console.log('盆場');
//}

const test = (arg) =>{
  if(inoki.length > arg){
    console.log('ボンバイエ');
  }else{
    console.log('盆場');
  }
};
//test(5);

//オブジェクト
const unko2 = {
  color: 'pink',
  size:'large',
  purfume:'mint',
  goToilet: () =>{
    console.log('Hello World11');
  }
};

console.log(unko2.goToilet());
console.log(window.alert('Hello world'));

document.getElementsByTagName('button')[0].addEventListener('click',()=> {
 window.alert('Hello');
 
});

