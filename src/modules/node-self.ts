import { UserModule } from '~/types'
import 'node-self'

export const install: UserModule = ({ isClient }) => {
  if (!isClient) {
    void !(function() {
      typeof self === 'undefined' && typeof global === 'object'
        ? global.self = global
        : null
    }())
  }
}
