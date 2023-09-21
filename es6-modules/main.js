import './style.css'
import { dogFactory } from './factories/dogFactory';

const dog1 = dogFactory("Doggy", "Golden Retriever");

document.querySelector('#app').innerHTML = `
  <div>
    <h1>hello</h1>
  </div>
`
