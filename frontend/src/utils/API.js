export const URL='http://localhost:3001';
export const header = {
  'Authorization': '12345'
}

export const fetchCategories = () => {
  return fetch(`${URL}/categories`, { headers: header })
    .then(res => res.json())
    .then(data => data.categories);
}

export const fetchPosts = () => {
	return fetch(`${URL}/posts`, {headers: header})
	.then(res => res.json())
	.then(data => data);
}