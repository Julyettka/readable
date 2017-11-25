export const BASE_URL='http://localhost:3001';
export const header = {
  'Authorization': '12345'
}

export const getCategories = () => {
  return fetch(`${BASE_URL}/categories`, { headers: header })
    .then(res => res.json())
    .then(data => data.categories);
}