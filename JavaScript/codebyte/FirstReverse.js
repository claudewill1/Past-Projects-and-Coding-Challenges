const FirstReverse = str => {
    let stringArr = str.split('');
    let revArr = stringArr.reverse();
    str = revArr.join("");
    return str;

}

console.log(FirstReverse('A cat named Dog and a Dog named Cat'));