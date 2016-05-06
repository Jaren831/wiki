function wikiRandom() {
	window.open("https://en.wikipedia.org/wiki/Special:Random");
};

function wikiSearch(entry) {
	window.open("https://en.wikipedia.org/wiki/" + entry);
};

document.getElementById("wiki").onclick = function() {
	wikiRandom();
};

document.getElementById("searchBtn").onclick = function() {
	wikiSearch(document.getElementById("searchEntry").value);
};

$(document).ready(function(){

    $(document).bind('keypress',pressed);
});

function pressed(e)
{
    if(e.keyCode === 13)
    {
        alert('enter pressed');
        //put button.click() here
    }
}