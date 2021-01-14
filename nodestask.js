const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("Enter your age: ");
let name = prompt("Enter your name: ");
class Node {
  constructor(year, highlight, next = null) {
    this.year = year;
    this.highlight = highlight;
    this.next = next;
  }
}
class LinkedList {
  constructor(year, highlight) {
    this.head = new Node(year, highlight);
  }

  insertBeginning = (year, highlight) => {
    const newNode = new Node(year, highlight, this.head);
    this.head = newNode;
  };

  getdata = () => {
    let current = this.head;
    while (current) {
      console.log(`year: ${current.year}, highlight: ${current.highlight}`);
      current = current.next;
    }
  };
  insertHighlights = (age) => {
    let current = this.head;
    while (current.year < age) {
      let currentYear = current.year + 1;
      if (current.next && current.next.year === currentYear) {
        current = current.next;
      } else {
        let highlight = prompt(
          `Enter your highlight for this year: ${currentYear}  `
        );
        let newNode = new Node(currentYear, highlight, current.next);
        current.next = newNode;
        current = newNode;
      }
    }
  };
}

name = new LinkedList(7, "I turned seven");
name.insertBeginning(3, "I started walking");
name.insertBeginning(1, "I was born");
name.getdata();

name.insertHighlights(age);
name.getdata();
