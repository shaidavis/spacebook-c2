var posts = []; // this is the posts array
var postId = -1; // this is my global variable to set the ID of the post to -1

var Post = function(postText, postId){ //this is the object template for posts
  this.postText = postText; //it takes a variable of post text
  this.postId = postId; // and a variable of post id
}



var addPost = function () {  //this function is to add a post
  var postText = $('#post-name').val(); // the post text is taken from the input
  postId = postId += 1; // the post id is 1 more than the previous one

  var newPost = new Post (postText, postId) // this instantiates a new post
 
  posts.push(newPost); // and pushes that new post object to the array
  
  updatePosts(); // then we run the update posts function (see below)
  bindEvents(); // and the bind events function (see below)


}



$('.add-post').on('click', addPost); // this is where the button actually gets its behavior to add a new post



var updatePosts = function () { //this is where we define the updatePosts function
  $('.posts').empty(); //empty out the posts class div that is set in the HTML... we want it to empty completely each time, so that it doesn't duplicate the new posts every time we add a new one
  for (i = 0; i < posts.length; i++) { // then we set a loop that goes through the array
    $('.posts').append("<p class='post'" + "data-id='"+posts[i].postId+"'><a href='#' class='remove-post'>remove</a> " + posts[i].postText + " with an ID of:  " + posts[i].postId + "</li"); //and adds each newPost to the div that we just emptied a couple lines above, along with IDs and remove buttnos


  }

} 

var removePost = function () { // here is our remove Post function
   $('.remove-post').click(function () { // on click of the "remove button"
    $(this).closest("p").remove(); //look for the closest 'p' *above* (containing) the remove button that called it
    posts.splice(posts[$(this).closest("p").find("data-id").val()], 1); //and splice out the corresponding object from the posts array
  });
}


var bindEvents = function (func) { // this is a bind event function called each time we add an event, so that if we want to remove a post the function will have "seen" the relevant html. if we don't have it, it will only "See" the html from page load.
  removePost();
}