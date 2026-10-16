const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postEl = document.getElementById("post");

for (let i = 0; i < posts.length; ++i) {
    postEl.innerHTML += `
        <div class="user-profile">
            <img class="profile-logo" src="${posts[i].avatar}">
            <div class="profile-details">
                <p class="profile-name">${posts[i].name}</p>
                <p class="profile-location">${posts[i].location}</p>
            </div>
        </div>
        <div class="post-section">
            <img class="post-img" src="${posts[i].post}">
        </div>
        <div class="comment-section">
            <div class="reactions-section">
                <img class="reaction" src="images/icon-heart.png">
                <img class="reaction" src="images/icon-comment.png">
                <img class="reaction" src="images/icon-dm.png">
            </div>
            <p class="likes">${posts[i].likes} likes</p>
            <p class="comment"><span class="comment-user">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    `
}