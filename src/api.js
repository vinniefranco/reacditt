import request from 'superagent'

function wrapRequest(url, type) {
  return new Promise((resolve, reject) => {
    request[type](url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.body)
        }
    })
  })
}

export function fetch(pathFragment) {
  let url = `https://www.reddit.com/r/${pathFragment}.json`

  return {
    head() {
      return wrapRequest(url, 'head')
    },
    get() {
      return wrapRequest(url, 'get') 
    }
  }
}
