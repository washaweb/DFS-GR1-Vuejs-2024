# Créer un serveur web

Voici un exemple de serveur Web HTTP Hello World:

```js
  const http = require('http')

  const port = process.env.PORT

  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
  })

  server.listen(port, () => {
    console.log(`Server running at port ${port}`)
  })
```

## créer une requête GET

Bien que NodeJS est le plus souvent utilisé pour GÉRER et RECEVOIR des requêtes Http, il est également possible d'en ENVOYER :

```js
  const https = require('https')
  const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'GET'
  }

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('error', error => {
    console.error(error)
  })

  req.end()
```


## créer une requête POST

De même, il est possible d'ENVOYER une requête POST, PUT, DELETE avec NodeJs :

```js
  const https = require('https')

  const data = JSON.stringify({
    todo: 'Buy the milk'
  })

  const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('error', error => {
    console.error(error)
  })

  req.write(data)
  req.end()
```

## PUT, PATCH et DELETE

Les requêtes PUT et DELETE utilisent le même format de requête POST et modifient simplement la valeur `options.method`.
