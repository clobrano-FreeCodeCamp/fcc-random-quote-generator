$(document).ready(function(){
    getQuote();
    $("button").click(getQuote);
});

function getQuote() {
    console.log("Refresh quote");
    $.getJSON("http://quotes.rest/qod.json", function(data) {
        $("#quote").html(data.contents.quotes[0].quote);
        $("#author").html("- " + data.contents.quotes[0].author);
    });
}
