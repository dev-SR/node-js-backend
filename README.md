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

```bash
yarn seed -i
```

Deleting data:

```bash
yarn seed -d
```

<div id="faker" ></div>

## Faker.js

[Github](https://github.com/marak/Faker.js/)\
[UnOfficial Doc](https://fakerjsdocs.netlify.app/)\
[Demo](https://rawgit.com/Marak/faker.js/master/examples/browser/index.html)

> Note: `random.number()` deprecated, instead use `datatype.number()`

**Generating data:**

```bash
yarn faker [file_name]! [no. of items]!
```

EX:

```bash
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

let uid = faker.random.arrayElement(arr);

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

> Ex: Products

```javascript
let data = [...Array(N)].map(() => ({
      name: faker.commerce.productName(),
      price: faker.commerce.price(10, 1000000),
      description: faker.lorem.sentences(4),
      rating: faker.datatype.number(5),
      images: [...Array(getRandom(5))].map(() => ({
         url: faker.image.food(),
         public_id: faker.datatype.uuid()
      })),
      category: faker.random.arrayElement([
         'Electronics',
         'Cameras',
         'Laptop',
         'Accessories',
         'Headphones',
         'Food',
         'Books',
         'Clothes/Shoes',
         'Beauty/Health',
         'Sports',
         'Outdoor',
         'Home'
      ]),
      seller: faker.company.companyName(),
      stock: faker.datatype.number(5),
      reviews: [...Array(getRandom(4))].map(() => ({
         name: faker.name.findName(),
         rating: faker.datatype.number(5),
         comment: faker.lorem.sentences()
      }))
   }));
```
