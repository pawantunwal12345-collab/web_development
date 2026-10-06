


let posts = [];

function addPost() {

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if(title=="" || content==""){
        alert("Fill all fields");
        return;
    }

    posts.push({
        title:title,
        content:content,
        comments:[]
    });

    document.getElementById("title").value="";
    document.getElementById("content").value="";

    showPosts();
}

function showPosts(){

    let output="";

    for(let i=0;i<posts.length;i++){

        output+=`
        <div class="post">
            <h2>${posts[i].title}</h2>
            <p>${posts[i].content}</p>

            <input id="c${i}" placeholder="Write comment">

            <button onclick="addComment(${i})">
                Comment
            </button>

            <div>
        `;

        for(let j=0;j<posts[i].comments.length;j++){
            output+=`
            <p class="comment">
            ${posts[i].comments[j]}
            </p>
            `;
        }

        output+=`
            </div>
        </div>
        `;
    }

    document.getElementById("posts").innerHTML=output;
}

function addComment(index){

    let comment=document.getElementById("c"+index).value;

    if(comment==""){
        alert("Enter comment");
        return;
    }

    posts[index].comments.push(comment);

    showPosts();
}