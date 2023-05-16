function bolder()
{
    var paragraphs = document.querySelectorAll('p');

    for(var i = 0; i < paragraphs.length; i++)
    {
        var words = paragraphs[i].innerText.split(' ');
        for(var j = 0; j < words.length; j++)
        {
            var word = words[j];
            var modifiedWord = word;
            
            var ing = word.lastIndexOf("ing")
            if(ing !== -1 && word.length > 3){
                //Boldens the first part of a word if its an "ing" word
                modifiedWord = '<b>' + word.substring(0, ing) + '</b>' + word.substring(ing);
                
            }else if(word.length == 4){
                modifiedWord = '<b>' + word.substring(0, 2) + '</b>' + word.substring(2);
            
            }else if(word.length == 5 || word.length == 6){
                modifiedWord = '<b>' + word.substring(0, 3) + '</b>' + word.substring(3);
            
            }else if(word.length > 6){
                modifiedWord = '<b>' + word.substring(0, 4) + '</b>' + word.substring(4);
            }
            
            
            
            words[j] = modifiedWord;

        }
        paragraphs[i].innerHTML = words.join(' ');
    }
}

if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    bolder();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        bolder();
    });
}

// document.addEventListener('DOMContentLoaded', bolder);