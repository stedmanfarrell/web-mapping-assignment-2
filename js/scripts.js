// when engine photo is clicked, run code
$('.engineimages').click(function() {
  // pull photo url from class attributes
var photoURL = $(this).attr('src')
  // use photourl to display engine photo in #bigphoto
  $('#bigphoto').css('background-image', `url(${photoURL})`)

  // pull title from class attributes
  var title = $(this).attr('title')
  // display title in #enginename
  $('#enginename').html(`${title}`)


})
