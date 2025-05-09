import {URLSafeSerializer} from './src'
import zlib from "zlib";

console.log(URLSafeSerializer)
// const itsdanger = require('../dist');
const signer = new URLSafeSerializer('0123456789abcdef', {salt: 'itsdangerous'})
let w = {
  'user_id': 49,
  'type': 'steammew',
  'lease': false,
  'expire': 1696763624,
  'password': 'pbkdf2:sha256:260000$2WHamJZKdyWZekzF$9d5e873eed94121d9c4de7ef44a20381be84d5d6b578764be212bdffeec51a8e'
}

async function main() {

  // let d = Buffer.from('{user:1}')

  // zlib.deflate(d, (err, buffer) => {
  //   if (err) {
  //   }
  //   // URLSafeBase64Encode(super.dumpPayload(obj))
  //   let v = buffer.toString('base64')
  //   console.log('zip',v)
  // })

  let a = await signer.dumps({user: 2})

  // let a = await signer.dumps(w)
  // .eJyrViotTi1SsjKsBQAThANn.bebyoKQ+S/ynofO2dpqaWv4vHuU=
  console.log('sign',a)
  // e = 'eyJ1c2VyX2lkIjo0OSwidHlwZSI6InN0ZWFtbWV3IiwibGVhc2UiOmZhbHNlLCJleHBpcmUiOjE2OTY3NjM2MjQsInBhc3N3b3JkIjoicGJrZGYyOnNoYTI1NjoyNjAwMDAkMldIYW1KWktkeVdaZWt6RiQ5ZDVlODczZWVkOTQxMjFkOWM0ZGU3ZWY0NGEyMDM4MWJlODRkNWQ2YjU3ODc2NGJlMjEyYmRmZmVlYzUxYThlIn0.dwu/ZgyoziFyJZmWQBChV//Cc7g'
  let e = '.eJyrViotTi1SsjKqBQAThgNo.Di3-nEgD9CkuHHuFEZEE_qauyv8'
  // let e = '.eJyrViotTi1SsjKqBQAThgNo.Di3+nEgD9CkuHHuFEZEE/qauyv8'
  let d = await signer.loads(e)
  console.log(d)

}

main()
// let a = ''
// let c = '.eJwNjE0OgjAUBu_y4pIFffSXAxijByBhY1rf12iUSCgG0Xh3md3MYr70KpjON6FWh4rmdQS1VGbEYcBCFT0Qy5ZyfBRUhPd4mzZVNlhnG8u6ojGWsjyn7UBjukvmtlwjG9uyrTd23B3icOxPsnY97p_9LoiBdw0gQStWEi5a4JC1jlw3XiV4LUZsMs47qxNYcZKcgYtR0YN-f0LLN0c'
// let e='eJwNjE0OgjAUBu_y4pIFffSXAxijByBhY1rf12iUSCgG0Xh3md3MYr70KpjON6FWh4rmdQS1VGbEYcBCFT0Qy5ZyfBRUhPd4mzZVNlhnG8u6ojGWsjyn7UBjukvmtlwjG9uyrTd23B3icOxPsnY97p_9LoiBdw0gQStWEi5a4JC1jlw3XiV4LUZsMs47qxNYcZKcgYtR0YN-f0LLN0c.rNm8-1L0ZRml2J4AcOC_lx1ohCU'
// let d = signer.loads('IjIyMiI.9/k8n07ys7KWjkqak8WONlwCIYY=')
// let d = signer.loads(e)
// console.log(d)

