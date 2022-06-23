/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escapes = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweetObj) => {
  const user = tweetObj.user;
  const content = tweetObj.content;
  const rc =
    `<article class="tweet">
  <header><img src ="${escapes(user.avatars)}"><span id="user-name">${escapes(user.name)}</span></header>
  <span class="message">${escapes(content.text)}</span>

  <footer>
    <span>${escapes(timeago.format(tweetObj.created_at))}</span>
    <span class="icons">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </span>
  </footer>
  </article>`;

  return rc;
}
$(document).ready(function () {

  //write a new tweet by clicking arrow buttom
  $(".fa-angles-down").click(function(){
    $(window).scrollTop($('nav').position().top);
    $('textarea').focus();
  })

  //renders Tweet and displays in reverse order using prepend
  const renderTweets = function (tweets) {
    $('#tweets-container').empty();
    tweets.forEach(tweet => {
      $('#tweets-container').prepend(createTweetElement(tweet));
    })
  }

  //loads tweet to server using ajax
  const loadtweets = function () {
    $.get('/tweets', (tweet) => {
      renderTweets(tweet);
    })
  }

  //error in textarea, will scroll to the error message and shows slide effects
  const errorAnimation = (id)=>{
    $(window).scrollTop($(id).position().top);
    $(id).slideDown("slow");
      $('#tweet-text').on('keypress', function () {
        $(id).slideUp();
        $('textarea').focus();
      })
  }

  //eventListener on form sumbit
  $('form').submit(function (event) {
    event.preventDefault();
    
    const tweetLength = event.target.text.value.length;

    if (tweetLength === 0) {
      errorAnimation("#error-message1");
    } else if (tweetLength > 140) {
      errorAnimation("#error-message2");
    } else {
      $.post("/tweets", $(this).serialize(), (data) => {
        loadtweets();
        event.target.text.value ='';
      })
    }
  })

  loadtweets();
})

