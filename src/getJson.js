export default function getJson(url) {
  return fetch(url).then((response) => {
    return response.json()
  })
}
