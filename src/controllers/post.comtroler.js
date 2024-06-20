import postView from '../views/post.html'

const getUserId = async (id) => {
     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
     return await response.json();
};

const getPostsId = async (id) => {
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
     const posts = await response.json();
     const dataPostId = posts.filter(post => post.userId === id);
     return await dataPostId;
};

export default async (id) => {
     let posts = [];
     let postsContent = "";
     const divElement = document.createElement('div');
     divElement.innerHTML = postView;
     const postsElement = divElement.querySelector("#posts");
     const userId = await getUserId(id);
     const postsId = await getPostsId(id);
     if (!(Array.isArray(postsId))) {
          posts.push(postsId);

     } else {
          posts = postsId;
     }
     postsContent += `<div class="row">
                        <h3>Id User: ${userId.id} - Name: ${userId.name} - Total Posts: ${posts.length}</h3>
                      </div>`
     posts.map((post) => {
      postsContent += `<div class="card border-primary mb-3" >
                         <div class="card-header">
                          <h4 class="card-title">${post.title}</h4>
                         </div>
                              <div class="card-body">
                                   <p class="card-text">${post.body}</p>
                              </div>
                       </div>`
     });
     postsElement.innerHTML += postsContent;
     return divElement;
};