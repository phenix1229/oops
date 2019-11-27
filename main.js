const Stack = function() {
  return {
    items: [],

  add: function(str) {
    this.items.push(str);
  },

  remove: function() {
    return this.items.pop();
  },

  peek: function() {
    return this.items[this.items.length - 1]
  },
  }
}



const Queue = function() {
  return {
    items: [],

    add: function(str) {
      this.items.push(str);
    },

    remove: function() {
      return this.items.shift();
    },

    peek: function() {
      return this.items[0];
    }
  }
}

module.exports = {
  Stack,
  Queue,
}