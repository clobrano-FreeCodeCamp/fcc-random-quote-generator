$(document).ready(function() {
    $("button").click(function() {
        location.reload();
    })
});

function parseJsonpResponse(response) {
    console.log("callback");
    $("#quote").html(response[0].content);
    $("#author").html(response[0].title);
}


