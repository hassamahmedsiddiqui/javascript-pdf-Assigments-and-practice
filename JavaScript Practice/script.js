// function postText() {
//     var input = document.getElementById("inputText").value;
//     var postContainer = document.getElementById("postContainer");
    
//     var newPost = document.createElement("p");
//     newPost.textContent = input;
//     postContainer.appendChild(newPost);
    
//     // Clear the input field after posting
//     document.getElementById("inputText").value = "";
//   }
  

function createPost() {
    var postContent = document.getElementById("post-content").value;
  
    if (postContent.trim() === "") {
      alert("Please enter some content for the post.");
      return;
    }
  
    var postContainer = document.getElementById("post-container");
  
    var postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = postContent;
  
    postContainer.appendChild(postElement);
  
    document.getElementById("post-content").value = "";
  }
  