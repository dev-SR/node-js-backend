# Overview

-  initialization
-  dependencies
-  package.json
-  postman
-  db
   -  mongodb
   -  [faker.js](#faker)
   -  [seeding](#seed)

## Initialization:

```bash
npm/yarn init -y
```

## Dependencies:

```bash
yarn add express dotenv mongoose pino pino-pretty dayjs
yarn add nodemon --dev
```

```ts
import dotenv from 'dotenv';
dotenv.config();
```

## Configure package.json:

```json
{
   "type": "module",
   "scripts": {
      "start": "node src/server.js",
      "dev": "nodemon src/server.js",
      "seed": "cd src/db && node --experimental-json-modules seeder",
      "faker": "cd src/db && node faker"
   }
}
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

<div id="seed"/>

## Seeding Data:

Importing data:

```
yarn seed -i
```

Deleting data:

```
yarn seed -d
```

<div id="faker" ></div>

## Faker.js

[Github](https://github.com/marak/Faker.js/)\
[UnOfficial Doc](https://fakerjsdocs.netlify.app/)\
[Demo](https://rawgit.com/Marak/faker.js/master/examples/browser/index.html)

> Note: `random.number()` deprecated, instead use `datatype.number()`

**Generating data:**

```
yarn faker [file_name]! [no. of items]!
```

EX:

```
yarn faker
yarn faker user.json
yarn faker product.json 100
```

> random Id From Given Ids:

```js
import faker from 'faker';
let arr = [
   '60c8e5977008b5518069f811',
   '60c8e5977008b5518069f812',
   '60c8e5977008b5518069f813',
   '60c8e5977008b5518069f814',
   '60c8e5977008b5518069f815'
];
let _ = {
   randomUUIDFromGiven: function (arr) {
      let uid = faker.random.arrayElement(arr);
      return uid;
   }
};
_.randomUUIDFromGiven(arr);
```

> random But Unique Id From Given Ids:

```js
import faker from 'faker';
let arr = [
   '60c8e5977008b5518069f811',
   '60c8e5977008b5518069f812',
   '60c8e5977008b5518069f813',
   '60c8e5977008b5518069f814',
   '60c8e5977008b5518069f815'
];
let _ = {
   unique_id: 0,
   random_unique_UUIDFromGiven: function (arr, count) {
      if (this.unique_id === arr.length) {
         log.error(`Array Out of Bound; Max Allowed ${this.unique_id} items`);
         // as we cant generate more unique id;
         process.exit();
      }
      let uuid = arr[this.unique_id++];
      return uuid;
   }
};
```

> generate Array of Object Id:

```js
//Generate Object id
let GeneratedObjectIDs = [];
for (let i = 0; i < N; i++) {
   let id = ObjectID();
   ObjectIDs.push(id);
}
```

> random arrayOfObjectId:

```js
import ObjectID from 'bson-objectid';
let _ = {
   arrayOfUUID: function () {
      let ar = [];
      let N = Math.floor(Math.random() * 4) + 1;
      for (let i = 0; i < N; i++) {
         // let uid = this.randomUUIDFromGiven();
         // let uid = this.randomUUIDFromGenerated();
         let uid = ObjectID();
         ar.push(uid);
      }
      return ar;
   }
};
```

> arrayOfPhotos:

```js
import faker from 'faker';
let _ = {
   arrayOfPhotos: function () {
      let ar = [];
      // 0 or 1
      let ZeroOrOne = Math.floor(Math.random() * 2) + 0;
      // if 1 generate multiple image
      if (ZeroOrOne === 1) {
         let N = Math.floor(Math.random() * 5) + 1;
         for (let i = 0; i < N; i++) {
            let img = faker.image.image();
            ar.push(img);
         }
         return ar;
      } else {
         //if 0  use default image
         ar.push('no-photos.png');
         return ar;
      }
   }
};
```
