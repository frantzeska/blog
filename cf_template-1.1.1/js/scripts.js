$(document).ready(function(){
  //Smooth scrolling
  var $root = $('html, body');
  $('#navbar-example a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  //Tooltips
  $(function () {
    $('#item1','#item2').tooltip();
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
///////////////////////////////////////////////////////////////////////////////////////////////
//////enas tropos molis patisw to submit na svinei mono to textbox kai na emfanizei to keimeno
// Event Listener on submit button
  $("#buttonText").on("submit", function(e) {
    e.preventDefault()
    var comment = $('#message').val();
    //console.log(comment); //gia na mou emfanizei k sto console ti egine submit
    $('#visible-comment').html(comment);
    if(comment === "" ){
      $('#message').css("border", "2px solid red");
    }
    else{
      $('#message').hide(); //gia na krupsw to text area molis paththei to submit
    }
    return false;
  });
//////allos tropos na svinei olo to form-group kai na vgazei sugkekrimeno keimeno pou orizw egw
  //$('#buttonText').on('click', function() {
    //var prefix = "Thank You ";
    //var suffix = ". Your message has been sent.";
    //var name =  $('#name').val();
    //$('#visible-comment').html(prefix + name + suffix);
    //$('.message-box').hide();
    //$('.form-group').hide();
    //return false;
  //});
  $('#message').on("keyup", function() {
    console.log("keyup happened"); //gia na mou emfanizei k sto console auto pou exw dilwsei na mou deixnei
    var msgLength = $('#message').val().length; //here we set the length of the content of the textarea to a variable
    var counter = $('#charCount')
    console.log(charCount);
    counter.html('You typed: ' + msgLength + ' characters.'); //here we show a running character count to the user

    if(msgLength > 50) {
      counter.css('color', 'red');
    }
    else {
      counter.css('color', 'black');
    };
});
  //Contact Form borders
  $(".form-control").css("border", "2px solid #9999CC"); //gia na einai mwv ta borders apo contact form
  // work section
  for(var i = 0; i < works.length; ++i ) {
    $('#workSection .work').append("\
      <div class='col-12 col-sm-8 col-md-6 col-lg-4'>\
        <a href='https://www.google.gr/' target='_blank' class='work-img'>\
          <img src='" + works[i].pic + "' class='img-fluid'>\
          <span class='info'><p class='proj-title'>Title:</p> '" + works[i].title + "' </span>\
        </a>\
      </div>\
  ");
  var images = $("#work img");
  if(i%2===0){
    $(images[i]).css("border","2px solid DodgerBlue");
    } else {
    $(images[i]).css("border","2px solid salmon");
    };
  };
    $(".work-img").mouseenter( function() { //otan to pontiki phgainei stin eikona tou work emfanizei title k onoma project
      $(".info", this).show();
    }).mouseleave(function() {  //otan o kersoras feugei apo tin eikona kruvetai k to title k onoma project
      $(".info", this).hide();
    });
});
//map
function initMap() {
  var myLatLng = {lat: 37.9708945, lng: 23.7404743}; //ta vriskw apo googlemaps einai ta noumera meta to @
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 11
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Frantzeska Saiti'
  });
}
