import itsdanger from '../src/index.js'

// const itsdanger = require('../dist');
const signer = new itsdanger.URLSafeSerializer('0123456789abcdef',{salt:'itsdangerous'})
let a = signer.dumps('222')
console.log(a)
let d = signer.loads(a)
console.log(d)

