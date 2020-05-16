import { Sorter } from "./Sorter";
// import { NumbersCollection } from "./NumbersCollection";
// import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([100000, 3, -5, 0]);
// let numSorter = new Sorter(numbersCollection);
// numSorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("Xaayb");
// const strSorter = new Sorter(charactersCollection);
// strSorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
const linkedListSorter = new Sorter(linkedList);


console.log(linkedList.length);
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.print();
console.log(linkedList.length);

console.log(linkedList.at(0).data);
console.log(linkedList.at(1).data);
console.log(linkedList.at(2).data);
console.log(linkedList.at(3).data);


// linkedListSorter.sort();
// console.log(linkedList.data);