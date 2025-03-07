document.addEventListener('DOMContentLoaded', () => {
   function fetchPosts() {
      try {
         // POST запрос
         // fetch('http://localhost:5001/api/posts', {
         //    method: 'POST',
         //    headers: {
         //       'Content-Type': 'application/json;charset=utf-8'
         //    },
         //    body: JSON.stringify({
         //       'title': '1111',
         //       'author': 'gleb', 
         //       'content': 'not content'
         //    })
         // })


         // GET запрос
         fetch('http://localhost:5001/api/posts')
         .then(res => res.json())
         .then(posts => displayPosts(posts))
      } catch (err) {
         console.log('Ошибка при получении поста', err)
      }
   }

   function displayPosts(posts){
      const postsContainer = document.getElementById('posts')
      posts.forEach(post => {
         const postElement = document.createElement('div')
         postElement.innerHTML = `
            <h4>${post.id}</h4>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><b>${post.author}</b></p>
         `;
         postsContainer.appendChild(postElement)
      });
   }

   fetchPosts()
}) 
