const url = "https://www.example.com"; // url
const headers = {
  // headers here
};
export const fetchApi = () =>
  fetch(url, headers)
    .then(res => res.json())
    .then(res => res);
