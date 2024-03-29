/*
변수: 데이터를 담아 놓기 위해
        이름표를 붙여놓은 공간
*/

// 변수 선언
 //var num;

// 변수 초기화
//num=10;

// 변수 선언 + 초기화
var num=10;
num=20;

console.log(num);


var mbti = ['INFP','ENFJ','INTJ'];
 console.log(mbti[0]);
 console.log(mbti.length);

 //mbti[3]='ISTP';
// console.log(mbti.length);
 //console.log(mbti[3]);

 mbti[2]='ESFP';
 console.log(mbti[2]);

console.log(mbti.push('ESFP','ISTJ'));
var newMbti = [...mbti, 'ESFP', 'ISTJ'];

console.log(mbti);
console.log(newMbti);

console.log(mbti.pop());
console.log(mbti);

//unshift()
console.log(mbti.unshift('ESFP','ISTJ'));
console.log(mbti);

console.log(mbti.shift());
//console.log(mbti);

//onsole.log(mbti.slice(0,2));
//console.log(mbti.slice(-1));

// join ()
//console.log(mbti.join('-'));

console.log(mbti.slice(0,2));


if(a>2){
    console.log('a>2');
}else{
    console.log('a<=2');
}










