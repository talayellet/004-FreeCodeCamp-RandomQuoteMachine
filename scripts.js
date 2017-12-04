fGetRandomColor = function () {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color+=letters[Math.floor(Math.random() * 16)]
    }

    return color;
}

$(document).ready(function() {
    // fLoadQuote();
    $("#new-quote-btn").on('click', fLoadQuote);
    $("#new-quote-btn").on("click", function () {
        var color = fGetRandomColor();
        $(".random-color").css("background-color", color);
    })
});