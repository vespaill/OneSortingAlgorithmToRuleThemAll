import { Sorter } from "./Sorter";

/**
 * A CharactersCollection that behaves much like a string, with the added
 * functionality of being able to sort its individual character members.
 */
export class CharactersCollection extends Sorter {
    /**
     * Defines a string data field and initializes it with given argument.
     * Also initializes its base/parent Sorter class.
     * @param data string to initialize this CharactersCollection with.
     */
    constructor(public data: string) {
        super();
    }
    /**
     * Returns this CharactersCollection's number of elements.
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
        return (
            this.data[leftIndex].toLowerCase() >
            this.data[rightIndex].toLowerCase()
        );
    }
    /**
     * Swaps the values located at leftIndex and rightIndex.
     * @param leftIndex
     * @param rightIndex
     */
    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split("");

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join("");
    }
}
