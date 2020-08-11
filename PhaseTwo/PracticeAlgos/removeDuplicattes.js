function removeDuplicates(head) {
  let current = head
  let prev
  let regular = head

  while (regular.next) {
    if (prev !== current || !prev) {
      prev = new SinglyLinkedListNode(current.data)
      // console.log(prev.data)
    }
    if (current.next) {
      current = current.next
      if (current.next) {
        if (current.data === prev.data) {
          current = current.next
        }
      }
    }

    regular = regular.next
  }
  return prev
}
