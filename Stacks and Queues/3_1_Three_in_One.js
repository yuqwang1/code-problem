// TripleStack class holds 3 stacks in one array

class Stack {
  constructor() {
    this.array = [];
    this.length = [0,0,0]
  }


  push(stack, value) {
    let idx = this.length[stack - 1] * 3 + stack - 1;
    this.array[idx] = value;
    ++this.length[stack - 1];
  }

  pop(stack) {
    let value;
    if (this.length[stack - 1] > 0) {
      let idx = (this.length[stack - 1] - 1) * 3 + stack - 1;
      value = this.array[idx];
      this.array[idx] = undefined;
      this.length[stack - 1]--;
    }
    return value;
  }

  peek(stack) {
    let idx = (this.length[stack - 1] - 1) * 3 + stack - 1;
    let value;
    value = this.array[idx];
    return value
  }

  empty(stack){
    return this.length[stack - 1] === 0;
}
