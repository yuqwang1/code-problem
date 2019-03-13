What is an array ?
What is a hash table/hash map?
Hash table is one of the most important data structures in computing.
A hash table (hash map) is a data structure used to implement an associative array,
a structure that can map keys to values.
A hash table uses a hash function to compute an index into an array of buckets or slots,
from which the desired value can be found. In JavaScript we don’t have any built-in hash table.
What is a closure ?
What is a promise ?
A promise is an object that may produce a single value some time in the future:
either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
What is a binary Tree ?
What is big O ?
What is iteration and what is a recursion ?
Talk about stack and quene ?
Find indices of a value in Array?
For a sorted array, what kind of algorithm you can apply to find the indices of the value?
What is a linklist ?
What is a Set and what operation does Set have ?
Set.add(value), Set.delete(value), Set.values(), Set.has(value)
What is a Class ?


const emailPassDueDate = () => {
  const current_date = Date.now();
  let unpaid_user = new Set();
  let unpaid_email = [];
  for (let i = 0; i < Invoice.length; i++) {
    if (Invoice[i].payment_status === 'unpaid' && Invoice[i].due_date > current_date) {
      unpaid_user.add(Invoice[i].subscriber_id)
    }
  }

  for (let j = 0; j < Subscriber.length; j++) {
    if (unpaid_user.includes(Subscriber[j].id)) {
      unpaid_email.push(Subscriber[j].email)
    }
  }

  return unpaid_email
}
