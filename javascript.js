const txtElement = ['content editor', 'web developer', 'progammer'];
let count = 0;
let txtindex = 0;
let currentTxt ='';
let words ='';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtindex);
    document.querySelector('.efekngetik').textContent = words;

    if(words.length == currentTxt.length){
          count++;
          txtindex = 0;
    }

    setTimeout(ngetik, 200);

})();