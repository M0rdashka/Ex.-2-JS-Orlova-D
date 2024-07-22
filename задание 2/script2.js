document.getElementById('countButton').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    
    const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';
    const consonants = 'бвгджзйклмнопрстфхцчшщБВГДЖЗЙКЛМНОПРСТФХЦЧШЩ';
    
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            vowelCount;
        } else if (consonants.includes(char)) {
            consonantCount;
        }
    }
    
    let formattedText = text.split('').map(char => {
        if (vowels.includes(char)) {
            vowelCount++;
            return `<span class="vowel">${char}</span>`;
        } else if (consonants.includes(char)) {
            consonantCount++;
            return `<span class="consonant">${char}</span>`;
        } else {
            return char;
        }
    }).join('');

    document.getElementById('resultOutput').innerHTML = 
    `Гласные: ${vowelCount}, Согласные: ${consonantCount}<br>По косточкам: ${formattedText}`;
});