
import { UserModule } from '~/types'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ isClient, router, app }) => {
  if (!isClient)
    return

  router.isReady().then(async() => {
    const { registerScrollSpy } = await import('../../node_modules/vue3-scroll-spy')
    registerScrollSpy(app)
  })
}
