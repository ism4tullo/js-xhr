const requestURL = 'https://jsonplaceholder.typicode.com/todos/1'

function sendRequest(method, url) {
  return new Promise( (resolve, reject) => {
    const http = new XMLHttpRequest()

    http.open(method, url)

    http.responseType = 'json'

    http.onload = () => {
      if (http.status >= 400) {
        reject(http.response)
      } else {
        resolve(http.response)
      }
    }
    http.onerror = () => {
      reject(http.response)
    }
    http.send()
  })

}

sendRequest('GET', requestURL).then(
  data => console.log(data)
).catch(
  err => console.log(err)
)