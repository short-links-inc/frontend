#### Deployment

##### ENV copy over heroku api url

```shell
  REACT_APP_API_URL=heroku_api_url
```

#### Deployment

```shell
  brew tap heroku/brew && brew install heroku
  heroku login
  heroku create ticketbud-frontend
  git push heroku main
```
