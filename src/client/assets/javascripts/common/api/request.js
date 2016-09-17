const rootUrl = 'http://localhost:9000';
const url = (uri) => `${rootUrl}/${uri}`;

function checkStatus(json) {
  if (json.error) throw json.error;
  return json.result;
}

export function get(uri) {
  return global.fetch(url(uri))
    .then((response) => response.json())
    .then(checkStatus);
}

export function post(uri, data) {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    cache: 'default',
    body: JSON.stringify(data),
  };

  return global.fetch(url(uri), options)
    .then((response) => response.json())
    .then(checkStatus);
}

export default {
  get, post
};
