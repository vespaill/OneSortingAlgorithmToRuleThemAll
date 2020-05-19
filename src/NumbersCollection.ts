import { Sorter } from "./Sorter"

/**
 * A NumbersCollection is an array of numbers with the functionally to swap and
 * compare members as well as sort the collection.
 */
export class NumbersCollection extends Sorter {
    /**
     * Defines an array of numbers data field and initializes it with given
     * argument. Also initializes its base/parent Sorter class.
     * @param data array of nubmers to initialize this NumbersCollection with.
     */
    constructor(public data: number[]) {
        super();
    }
    /**
     * Returns this NumbersCollection's number of elements.
     */
    get length(): number {
        return this.data.length;
    }
    /**
     * Determines whether the value at leftIndex is greater than the value at
     * rightIndex.
     * @param leftIndex
     * @param rightIndex
     */
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    /**
     * Swaps the values located at leftIndex and rightIndex.
     * @param leftIndex
     * @param rightIndex
     */
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
