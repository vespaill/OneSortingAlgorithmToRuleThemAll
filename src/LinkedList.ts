import { Sorter } from "./Sorter"

/* A simple node class with a next pointer and a data member that's a number. */
class Node {
    next: Node | null = null;
    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    /**
     * Head node of the LinkedList. Initially set to null (empty list).
     */
    head: Node | null = null;
    /**
     * Creates a new node with the given data and inserts it at the tail of the
     * list.
     * @param data Value of the new node to insert.
     */
    add(data: number): void {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    /**
     * Returns the number of elements in this LinkedList.
     */
    get length(): number {
        if (!this.head) return 0;
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    /**
     * Returns the node located at the given index position.
     * @param index Position of a node within this LinkedList.
     */
    at(index: number): Node {
        if (!this.head) throw new Error("Index out of bounds");
        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    /**
     * Determines whether the value at leftIndex is greater than the value at
     * rightIndex.
     * @param leftIndex
     * @param rightIndex
     */
    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) throw new Error("List is empty");
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    /**
     * Swaps the values of the nodes located at leftIndex and rightIndex.
     * @param leftIndex
     * @param rightIndex
     */
    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    /**
     * Iterates through this LinkedList and prints the values at each node.
     * @param msg Optional message to print prior to the list.
     */
    print(msg: string=""): void {
        if (!this.head) return;
        let node: Node | null = this.head;
        let values: number[] = [];
        while (node) {
            values.push(node.data);
            node = node.next;
        }
        console.log(msg, values);
    }
}
