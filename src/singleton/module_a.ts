import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Luiz', age: 22 });
myDatabaseClassic.add({ name: 'Luiz', age: 22 });
myDatabaseClassic.add({ name: 'Luiz', age: 22 });

export { myDatabaseClassic };
