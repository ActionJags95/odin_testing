class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new ListNode(value);

    if(this.head == null) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while(curr.next != null) curr = curr.next;
    curr.next = node; 
  }

  search(value) {
    let curr = this.head;
    while(curr != null) {
      if(curr.value == value) return true;
      curr = curr.next;
    }
    return false;
  }

  printList() {
    let curr = this.head;
    while(curr != null) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(4);
console.log(ll.search(2));
console.log(ll.search(5));
ll.printList();