const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.getElementById("main");
let html = "";
for (let i = 0; i < posts.length; i++) {
  html += `
        <article class="post">
            <div class="header-container">
                <div class="avatar-side">
                    <img class="avatar-img" src="${posts[i].avatar}" alt="avatar">
                </div>
                <div class="name-side">   
                    <h1>${posts[i].name}</h1>
                    <h3>${posts[i].location}</h3>
                </div>
            </div>
            <div class="photo-gallery">
                <img class="photo-post" src="${posts[i].post}" alt="post-image">
            </div>
            <div class="post-features">
                <img class="heart" id="heart-el" src="images/icon-heart.png" alt="icon-heart">
                <img class="comment" src="images/icon-comment.png" alt="icon-comment">
                <img class="share" src="images/icon-dm.png" alt="icon-dm">
            </div>
            <div class="likes">
                <p id="like-el" >${posts[i].likes} likes</p>
            </div>
            <div class="comments">
                <h1>${posts[i].username}</h1>
                <p>${posts[i].comment}</p>
            </div>
        </article>      
    `;
}

mainEl.innerHTML = html;

const clicktLikeEl = document.getElementById("heart-el");
const countLikesEL = document.getElementById("like-el");
let count = 21;

clicktLikeEl.addEventListener("click", function () {
  count += 1;
  countLikesEL.innerText = count + " likes";
});
