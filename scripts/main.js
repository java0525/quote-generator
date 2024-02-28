$(document).ready(function() {
  var quotes = [{
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    },
    {
      text: "Whoever is happy will make others happy too.",
      author: "Anne Frank"
    },
    {
      text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "You will face many defeats in life, but never let yourself be defeated.",
      author: "Maya Angelou"
    },
    {
      text: "The greatest glory in life is not in never falling, but in rising every time we fall.",
      author: "Confucius"
    },
    {
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    },
    {
      text: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller"
    },
    {
      text: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein"
    }

  ];

  // array of colors
  var colors = ["#070F2B", "#1B1A55", "#211951", "#12372A", "#81689D", "#525CEB"];

  function randomColor() {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  function buttonClick() {
    var quoteIndex = Math.floor(Math.random() * quotes.length);
    var getQuote = quotes[quoteIndex];
    var getColor = randomColor();

    $("#quote h2").text(getQuote.text);
    $("#author h4 em").text("- " + getQuote.author);

    $("html body").animate({
      backgroundColor: getColor,
      color: getColor
    }, 1000);

    $(".quote-button").animate({
      backgroundColor: getColor,
      borderColor: getColor
    }, 1000);
    $(".fa").animate({
      color: getColor
    }, 1000);


  }


  buttonClick();

  // Event Listener for Generate Button
  $(".quote-button").on("click", buttonClick);
});
