// import {URLSafeSerializer} from './dist'

const itsdanger = require('./dist');
const signer = new itsdanger.URLSafeSerializer('tree:tree:tree', {salt: 'itsdangerous'})
let a = signer.dumps('222')
console.log(a)
// let d = signer.loads(a)
// console.log(d)

