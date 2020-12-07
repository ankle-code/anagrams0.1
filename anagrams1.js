const button = document.getElementById('findButton');
const span = document.createElement('span');

button.addEventListener('click', function() {
    let typedText = document.getElementById('input').value;
    span.innerText = getAnagramsOf(typedText);
    document.body.appendChild(span);
})

function getAnagramsOf(typedText) {
    let anagrams = palavras.filter(function(el) {
        if(alphabetize(typedText) === alphabetize(el)) {
            return el
        }
    })
    return anagrams.join(", ");
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
