String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function wordFreq(str) {
    var stopwords = ["a","all","am","an","and","any","are","aren't","as","at","be","because","been","before","being","below","between","both","but","by","can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves"];

    var stopwords_sub = ["the", "in"];

    var str1 = str;
    // str1 = str.replace(new RegExp('\\b('+stopwords.join('|')+')\\b', 'g'), '');
		str1 = str.replace(new RegExp('\\b('+stopwords_sub.join('|')+')\\b', 'g'), '');
    // str1 = str1.toLowerCase().replace(/\s/g, ' ');
    str1 = str1.replaceAll('hazardous materials', 'hazmat');
    str1 = str1.replaceAll('hazardous material', 'hazmat');
    str1 = str1.replaceAll('hazardous-materials', 'hazmat');
    str1 = str1.replaceAll('hazardous-material', 'hazmat');
		str1 = str1.replaceAll('vehicles', 'vehicle');
    str1 = str1.replaceAll(';', '');
    str1 = str1.replaceAll(',', '');
    str1 = str1.replaceAll('(', '');
    str1 = str1.replaceAll(')', '');

    console.log(str1);
    var wds = str1.split(/\s/);
    var freqMap = {};
    wds.forEach(function(w) {
      w = w.replace(",", "");
      w = w.replace("(", "");
      w = w.replace(")", "");
      w = w.replace("'s", "");
      w = w.replace(";", "");
      w = w.replace(",", "");
	    w = w.toLowerCase();
      w = w.replace("nash", "Nash");
      w = w.replace("cournot", "Cournot");
      w = w.replace("stackelberg", "Stackelberg");
      w = w.replace("markov", "Markov");
      w = w.replace("kalman", "Kalman");
      w = w.replace("hilbert", "Hilbert");
      w = w.replace("korean", "Korean");
      w = w.replace("monte", "Monte");
      w = w.replace("carlo", "Carlo");
      // if (! stopwords.has(w) && !w.includes("\\") ) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
      // }
    });

    // var words = freqMap.map(function(t, s) {
    //   return {text: t, size: s};
    // });

    var words = [];
    for (var w in freqMap) {
      if (freqMap[w] > 0) {
        words.push({ text: w, size: Math.pow(freqMap[w], 0.5) });
      }
    }

    words.sort(function(a,b) {
      return (a.size > b.size) ? -1 : ((b.size > a.size) ? 1 : 0);
    } );


    return words;
}

var abss = "";

// var elements = document.getElementsByClassName('abstractbg');
// var elements1 = document.getElementsByClassName('article_title');
// for (var i = 0; i < elements1.length; i++) {
//   abss = abss.concat(' ', elements1[i].textContent);
//   // abss = abss.concat(' ', elements[i].innerHTML);
// }
var elements2 = document.getElementsByClassName('article_keywords');
for (var i = 0; i < elements2.length; i++) {
  abss = abss.concat(' ', elements2[i].textContent);
  // abss = abss.concat(' ', elements[i].innerHTML);
}

var words = wordFreq(abss);
// for (var i=0; i<words.length; i++) {
//   document.write(words[i].text + ': ' + words[i].size + '<br>');
// }
console.log(JSON.stringify(words))


var width0 = 800,
    height0 = 500,
    aspect = width0 / height0;

var light_color_pallette = ["#004191", "#BA8E3D", "#FAA914", "#4470A5", "#7A6847"];
var dark_color_pallette1 = ["#BBBBBB", "#E6986E", "#E6836E", "#E66EB6", "#E6AD6E"];
var dark_color_pallette2 = ["#5FBEEB", "#6E74E6", "#6E9AE6", "#6EE5E6", "#8F6EE6"];
var color_pallette = light_color_pallette;
// https://color.adobe.com/create/color-wheel
// KAISTDarkBlue: #004191

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  color_pallette = dark_color_pallette1;
} 

d3.wordcloud()
  .size([width0, height0])
  .fill(d3.scale.ordinal().range(color_pallette))
  .words(words)
  .start();



var svg_elem = document.getElementById('wordcloud'),
    container = d3.select(svg_elem.parentNode),
    targetWidth = parseInt(container.style("width")),
    targetHeight = Math.round(targetWidth / aspect);

var svg = d3.select(svg_elem);
svg.attr('width', targetWidth);
svg.attr('height', targetHeight);
// svg.attr("viewBox", "0 0 " + targetWidth + " " + targetHeight)
//   .attr("preserveAspectRatio", "xMinYMid meet");

d3.select(window)
  .on("resize", function() {
    var new_width = parseInt(container.style("width"))
    svg.attr("width", new_width);
    svg.attr("height", new_width / aspect);
  });
