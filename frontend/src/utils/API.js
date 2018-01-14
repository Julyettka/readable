export const URL='http://localhost:3001';
export const header = {
  'Authorization': '12345'
}

//GET method
export const fetchCategories = () => {
  return fetch(`${URL}/categories`, { headers: header })
    .then(res => res.json())
    .then(data => data.categories);
}

export const fetchPosts = () => {
	return fetch(`${URL}/posts`, {headers: header})
	.then(res => res.json());
}

export const fetchPostsbyCategory = (category) => {
  return fetch(`${URL}/${category}/posts`, { header })
    .then(response => response.json())
    .then(data => data)
}

export const fetchOnePost = (id) => {
	return fetch(`${URL}/posts/${id}`, {headers: header})
	.then(res => res.json());
}

export const fetchComments = (id) => {
	return fetch(`${URL}/posts/${id}/comments`, {headers: header})
	.then(res => res.json());
}

//POST method
export const votePost = (id, option) => {
    return fetch(`${URL}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...header,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            option
        })
    }).then(res => res.json())
}

export const voteComment = (id, option) => {
    return fetch(`${URL}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...header,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            option
        })
    }).then(res => res.json())
}


export const addPost = (post) => {
    return fetch (`${URL}/posts`, {
        method: 'POST',
        headers: {
            ...header,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...post,
            // id: uuid(),
            timestamp: Date.now()
        })
    }).then(res=> res.json())
}

export const addComment = (comment) => {
    return fetch (`${URL}/comments`, {
        method: 'POST',
        headers: {
            ...header,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...comment,
            timestamp: Date.now()
        })
    }).then(res=> res.json())
}

export const editPost = (id, post) => {
  return fetch(`${URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...header,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())
}

//editPost - PUT method?
// deletePost - DELETE method
//deleteComment -DEL
//editComment - PUT