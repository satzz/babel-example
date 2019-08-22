import { Bob } from './bob';

const names = ['Alice', Bob.getName()];
document.getElementById('target').innerHTML= `Hello, ${names.join(" and ")}`;
