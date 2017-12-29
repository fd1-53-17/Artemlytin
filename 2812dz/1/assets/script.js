var sentences = prompt('Введите предложение');
sentences = sentences.toLowerCase().split(' ').join('').split(',').join('')
    .split('.').join('').split(':').join('').split('-').join('');
var sentencesReverse = sentences.split("").reverse().join("");
if (sentences == sentencesReverse) {
    alert('Это палиндром');
}
else {
    alert('Это непалиндром');
}