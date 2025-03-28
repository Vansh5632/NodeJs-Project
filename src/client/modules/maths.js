export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b; // Unused, should be tree-shaken
  }
  
  console.log('Math module loaded'); // Side effect