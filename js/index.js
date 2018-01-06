function getQuote() {
    //https://quotesondesign.com/api-v4-0/ === random quote API
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#textline').html(post.content);
        $("#tweetbtn").attr('href', 'https://www.twitter.com/intent/tweet?text=' + "'" + $("#textline").text() + "'" + " " + " - " + " " + $("#quote-title").text() );
      },
      cache: false
    });
};


$("document").ready(getQuote);
$('#new-quote').on('click', getQuote);