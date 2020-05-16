import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([100000, 3, -5, 0]);
let sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
