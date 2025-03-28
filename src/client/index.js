import { add } from './modules/maths.js'; // Only import 'add', not 'subtract'
import { multiply } from './modules/pure.js';
import './styles/main.css';

console.log('App started!');
console.log('Add result:', add(2, 3)); // Used export
console.log('Multiply result:', multiply(4, 5));

// HMR support
if (import.meta.hot) {
  import.meta.hot.accept(); // Accept updates for this module
}