import request from 'superagent'

function req(type) {
  return (path) => {
    let url = `https://www.reddit.com/r/${path}.json`

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
}

export const fetch = {
  head: req('head'),
  get: req('get')
}
