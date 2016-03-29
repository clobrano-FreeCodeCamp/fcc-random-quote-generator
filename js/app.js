$(document).ready(function() {
  getQuote();
  $("button").click(getQuote);
});

function getQuote() {
  $.ajax({
    type: "POST",
    beforeSend: function(request) {
      request.setRequestHeader("X-Mashape-Key", 'NnNuEd4mlkmshGIlZfWqobpVSNoxp1ejI05jsn5Hrtt3XgvSaS');
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(response) {
      $("#quote").html(response.quote);
      $("#author").html("- " + response.author);
    },
    error: function(obj, message, exception) {
      console.log(message + " " + exception);
    }
  });
}
