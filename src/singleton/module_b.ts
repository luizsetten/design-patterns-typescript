import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Luiz', age: 22 });
myDatabaseClassic.add({ name: 'Rafael', age: 22 });
myDatabaseClassic.add({ name: 'Rodrigo', age: 22 });

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
