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

> `commands that need to be used before using the auth service`

- npm init -y
- tsc --init

> `dependencies`

- npm install typescript express @types/express
- npm install jsonwebtoken @types/jsonwebtoken
- npm install mongoose express-validator @types/mongoose
- npm install mongodb-memory-server --save-dev
- npm install express-async-errors
- npm install cookie-session @types/cookie-session
- npm install supertest @types/supertest --save-dev
- npm install --save-dev jest @types/jest ts-jest
- npm install ts-node-dev
- npm install @yavartickets/common

> `docker build`

- docker build -t yavarguliyev/auth .

> # nats-test service

> `commands that need to be used before using the nats-test service`

- npm init -y
- tsc --init

> `dependencies`

- npm install typescript @types/node
- npm install node-nats-streaming
- npm install @types/es6-shim --save-dev
- npm install ts-node-dev
- npm install @yavartickets/common

> # expiration service

> `commands that need to be used before using the expiration service`

- npm init -y
- tsc --init

> `dependencies`

- npm install express bull cookie-session express-async-errors jsonwebtoken
- npm install mongoose mongoose-update-if-current node-nats-streaming ts-node-dev
- npm install typescript @types/express @types/jsonwebtoken @types/bull
- npm install @types/cookie-session @types/mongoose @yavartickets/common

- npm install @types/es6-shim --save-dev
- npm install --save-dev jest @types/jest ts-jest

> `docker build && push`

- docker build -t yavarguliyev/expiration .
- docker push yavarguliyev/expiration

> # orders service

> `commands that need to be used before using the orders service`

- npm init -y
- tsc --init

> `dependencies`

- npm install express ts-node-dev cookie-session express-async-errors jsonwebtoken
- npm install mongoose mongoose-update-if-current node-nats-streaming ts-node-dev
- npm install typescript @types/express @types/jsonwebtoken
- npm install @types/cookie-session @types/mongoose @yavartickets/common

- npm install @types/es6-shim --save-dev
- npm install supertest @types/supertest --save-dev
- npm install mongodb-memory-server --save-dev
- npm install --save-dev jest @types/jest ts-jest

> `docker build`

- docker build -t yavarguliyev/orders .

> # payments service

> `commands that need to be used before using the payments service`

- npm init -y
- tsc --init

> `dependencies`

- npm install express ts-node-dev cookie-session express-async-errors express-validator jsonwebtoken
- npm install mongoose mongoose-update-if-current node-nats-streaming ts-node-dev
- npm install typescript @types/express @types/jsonwebtoken
- npm install @types/cookie-session @types/mongoose @yavartickets/common

- npm install supertest @types/supertest --save-dev
- npm install mongodb-memory-server --save-dev
- npm install --save-dev jest @types/jest ts-jest

> `docker build && push`

- docker build -t yavarguliyev/payments .
- docker push yavarguliyev/payments

> # tickets service

> `commands that need to be used before using the tickets service`

- npm init -y
- tsc --init

> `dependencies`

- npm install express ts-node-dev cookie-session express-async-errors jsonwebtoken
- npm install mongoose mongoose-update-if-current node-nats-streaming ts-node-dev
- npm install @types/jsonwebtoken @types/express @types/jsonwebtoken express-validator typescript
- npm install @types/cookie-session @types/mongoose @yavartickets/common stripe

- npm install supertest @types/supertest --save-dev
- npm install mongodb-memory-server --save-dev
- npm install --save-dev jest @types/jest ts-jest

> `docker build && push`

- docker build -t yavarguliyev/tickets .
- docker push yavarguliyev/tickets

> # client-side (user interface)

> `commands that need to be used before creating user interface`

- npm init -y

> `dependencies`

- npm install react react-dom next axios bootstrap next react-stripe-checkout

> `docker build && push`

- docker build -t yavarguliyev/client .
- docker push yavarguliyev/client

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
