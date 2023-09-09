import {BaseSerializer} from './serializer'
import {BaseTimedSerializer} from './timed'

import {URLSafeBase64Encode, URLSafeBase64Decode} from './encoding'

import {required} from './utils'

const zlib = require('zlib')

const URLSafeSerializerMixin = Base => class extends Base {
  constructor(secretKey = required('secretKey'), {salt, serializer, signer, signerArgs} = {}) {
    super(secretKey, {salt, serializer, signer, signerArgs})
  }

  async dumpPayload(obj) {
    return new Promise((resolve, reject) => {

      let d = Buffer.from(JSON.stringify(obj))

      zlib.deflate(d, (err, buffer) => {
        // console.log()
        if (err) {
          return reject(err)
        }
        // URLSafeBase64Encode(super.dumpPayload(obj))
        let v = buffer.toString('base64')
        resolve('.' + v)
      })
    })

    // return URLSafeBase64Encode(super.dumpPayload(obj))
  }


  loadPayload(payload, serializer) {
    // return super.loadPayload(URLSafeBase64Decode(payload), serializer)
    return new Promise((resolve, reject) => {

      if (payload.startsWith('.')) {
        payload = payload.slice(1)
        let v = Buffer.from(payload, 'base64')

        return zlib.unzip(v, (err, buffer) => {
          resolve(buffer.toString())
        })
      } else {
        let v = Buffer.from(payload, 'base64')
        resolve(v.toString())
      }
    })
  }
}

export const BaseURLSafeSerializer = URLSafeSerializerMixin(BaseSerializer)

/**
 *
 * @param {string} secretKey
 * @param {object} options
 * @param {string} [options.salt='itsdanger.Serializer']
 * @param {function} [options.serializer=Json]
 * @param {function} [option.signer=Signer]
 * @param {object} [options.signerArgs]
 * @param {string} [options.signerArgs.sep]
 * @param {string} [options.signerArgs.keyDerivation]
 * @param {string} [options.signerArgs.digestMethod]
 * @param {function} [options.signerArgs.algorithm]
 */
export const URLSafeSerializer = function (secretKey, options = {}) {
  return new BaseURLSafeSerializer(secretKey, options)
}

export const BaseURLSafeTimedSerializer = URLSafeSerializerMixin(BaseTimedSerializer)

/**
 *
 * @param {string} secretKey
 * @param {object} options
 * @param {string} [options.salt='itsdanger.Serializer']
 * @param {function} [options.serializer=Json]
 * @param {object} [options.signerArgs]
 * @param {string} [options.signerArgs.sep]
 * @param {string} [options.signerArgs.keyDerivation]
 * @param {string} [options.signerArgs.digestMethod]
 * @param {function} [options.signerArgs.algorithm]
 */
export const URLSafeTimedSerializer = function (secretKey, options = {}) {
  return new BaseURLSafeTimedSerializer(secretKey, options)
}
