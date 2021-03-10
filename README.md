# Ticketing

## server

> # common service

> `commands that need to be used before using the common service`

- npm init -y
- tsc --init

> `dependencies`

- npm install typescript express @types/express
- npm install typescript --save-dev
- npm install @types/es6-shim --save-dev
- npm install cookie-session @types/cookie-session
- npm install jsonwebtoken @types/jsonwebtoken
- npm install node-nats-streaming
- npm install del-cli --save-dev
- npm install express-validator

#### publishing library to the npm package manager

- npm login
- git init
- git add .
- git commit -m "latest version"
- npm version patch
- npm publish

> # auth service

> `commands that need to be used before using the common service`

- npm init -y
- tsc --init

> `dependencies`

- npm install typescript express @types/express
- npm install jsonwebtoken @types/jsonwebtoken
- npm install mongoose @types/mongoose
- npm install mongodb-memory-server --save-dev
- npm install express-async-errors
- npm install cookie-session @types/cookie-session
- npm install supertest @types/supertest --save-dev
- npm install @types/es6-shim --save-dev
- npm install ts-jest --save-dev
- npm install --save-dev jest @types/jest ts-jest
- npm install ts-node-dev
- npm install @yavartickets/common

> `docker build`

- docker build -t yavarguliyev/auth .

> # Before creating pull request

```javascript
Make sure you create action before.
```

- git checkout -b dev - creates new branch
- git checkout dev - switches the branch
- git status
- git add .
- git commit -m "..."
- git push origin ...

```javascript
After all create pull request
```

```javascript
remove .ds_store file from github
```

- find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
- echo .DS_Store >> .gitignore
- git add .gitignore
- git commit -m '.DS_Store banished!'
