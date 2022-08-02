let commentApi = "https://jsonplaceholder.typicode.com/comments";

fetch(commentApi)
  .then(function (comments) {
    return comments.json();
  })
  .then(function (comment) {
    const htmls = comment.map(function (tag) {
      console.log(tag.name);
      return `
         <div class="comment">
        <div class="user">
          <p class="name">${tag.name}</p>
          <p class="email">${tag.email}</p>
        </div>
        <div class="text">
          <p>
            ${tag.body}
          </p>
        </div>
      </div>
      `;
    });
    const html = htmls.join("");
    document.querySelector(".container").innerHTML = html;
  });
