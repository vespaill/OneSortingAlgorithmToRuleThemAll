class Sorter {
    // collection: number[];
    // constructor(collection: number[]) {
    //     this.collection = collection;
    // }
    /* Equivalent to above */
    // constructor(public collection: number[]) {}
    constructor(public collection: number[] | string) {}

    /* bubble sort */
    sort(): void {
        let { length } = this.collection;

        for (let i = 1; i < length; i++) {
            for (let j = 0; j < length - i; j++) {
                // console.log(`${this.collection[j]} < ${this.collection[j+1]}`);
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        // console.log("--SWAP--");
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
