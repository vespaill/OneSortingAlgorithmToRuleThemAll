import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
    constructor(public collection: NumbersCollection) {}

    /* bubble sort */
    sort(): void {
        let { length } = this.collection;

        for (let i = 1; i < length; i++)
            for (let j = 0; j < length - i; j++)
                if (this.collection.compare(j, j + 1))
                    this.collection.swap(j, j + 1);
    }
}
