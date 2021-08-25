import { UserModule } from '~/types'

// Scroll spy Integration
export const install: UserModule = ({ isClient, app }) => {
  if (isClient) {
    import('vue3-scroll-spy').then(({ registerScrollSpy }) => {
      registerScrollSpy(app)
    })
  }
}
