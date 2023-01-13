let a = Boolean(4>3);
let b = Boolean(4>=3);
let c = Boolean(4<3);
let d = Boolean(4<=3);
let e = Boolean(4==4);
let f = Boolean(4===4);
let g = Boolean(4!=4);
let h = Boolean(4!==4);
let i = Boolean(4!='4');
let j = Boolean(4!=='4');
let k = Boolean(4==='4');

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);

// finding length and making falsy comparison statement

let lang1 = 'python';
let lang2 = 'jargon';
console.log('\n',lang1.length);
console.log('\n',lang2.length);

// making falsy comparison statement
console.log('\n',lang1.length !== lang2.length);