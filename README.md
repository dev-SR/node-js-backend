## Initialization:

```bash
npm/yarn init -y
```

## Dependencies:

```bash
yarn add express dotenv mongoose pino pino-pretty dayjs
yarn add nodemon --dev
```

## Configure package.json:

```json
{
   "type": "module",
   "scripts": {
      "start": "node src/server.js",
      "dev": "nodemon src/server.js"
   }
}
```

```ts
import dotenv from 'dotenv';
dotenv.config();
```

## Postman configuration:

> Postman Installation:

```
winget install Postman.Postman
```

> Environment Setup:

![postman-1](./img/postman1.jpg) ![postman-2](./img/postman2.jpg)

## Mongodb Installations using `winget`:

### Installations:

```cmd
winget install MongoDB.Server
winget install MongoDB.Compass.Full
```

`Add path to env: C:\Program Files\MongoDB\Server\4.4\bin`

### Seeding Data:

Importing data:

```
yarn run seed -i
```

Deleting data:

```
yarn run seed -d
```
