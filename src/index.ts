import data from './data.json' with { type: "json" };
import MyModule from './myModule.js';

console.log(MyModule.helloWorld, data.port);
