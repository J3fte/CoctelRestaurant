import useStore from 'stores/layouts/default'
import { useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'
import { useMeta } from 'quasar'

export default function useDefault () {
  const layout = useStore()
  const route = useRoute()

  function onClickMenu () {
    layout.toggleDrawer()
  }

  function onHideDrawer () {
    layout.hideDrawer()
  }

  function onLogout () {
    // storeLogout.logout().then(onSuccessLogout)
  }

  function changeTitleModule (newRoute) {
    layout.changeTitle(newRoute.meta?.title)
  }

  onMounted(() => {
    changeTitleModule(route)
  })

  useMeta(() => ({ title: route.meta?.title }))

  watch(route, changeTitleModule)

  return {
    onLogout,
    onClickMenu,
    onHideDrawer,
    layout
  }
}
