// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://newsapi.org/v2/everything?q=breast cancer&from=2020-01-22&sortBy=publishedAt&apiKey=f3b545bbb2a7481785306c6e19dae142', true)

request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
        document.getElementById("newsImg1").src = data.articles[2].urlToImage;
        document.getElementById("newsTitle1").innerHTML = data.articles[2].title;
        document.getElementById("newsDesc1").innerHTML = data.articles[2].description;

    } else {
        console.log('there was error');
    }
  }

  // Send request
  request.send();

var request2 = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request2.open('GET', 'http://newsapi.org/v2/everything?q=mental health&from=2020-01-22&sortBy=publishedAt&apiKey=f3b545bbb2a7481785306c6e19dae142', true)

request2.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
    if (request.status >= 200 && request2.status < 400) {
        document.getElementById("newsImg2").src = data.articles[16].urlToImage;
        document.getElementById("newsTitle2").innerHTML = data.articles[16].title;
        document.getElementById("newsDesc2").innerHTML = data.articles[16].description;
        data.articles.forEach(movie => {
            console.log(movie.title);
          })
    } else {
        console.log('there was error');
    }
  }

  // Send request
  request2.send();