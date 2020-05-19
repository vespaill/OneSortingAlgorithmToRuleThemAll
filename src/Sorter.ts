/**
 * Interfaces make sure these methods exist and have the correct parameters. It
 * doesn't know if they are correctly implemented.
 *
 * Not being used here, since we switched to an inheritance approach.
 */
// interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean;
//     swap(leftIndex: number, rightIndex: number): void;
// }

/**
 * Abstract Sorter class that implements a bubble sort. It does not care how
 * the children classes decide to implement the collection to be sorted, as long
 * as they have compare and swap methods.
 */
export abstract class Sorter {
    /**
     * Fields and methods that are promised to be implemented by any derived
     * class that wishes to extend Sorter.
     */
    abstract length: number;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    /**
     * Generic bubble sort algorithm that that depends on abstract methods to
     * work correctly (compare and swap).
     */
    sort(): void {
        let { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
