import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import options from './options'

export default defineStore('resourcesLayoutsDefault', () => {
  const $q = useQuasar()
  const showDrawer = ref(!$q.screen.lt.md)
  const moduleTitle = ref('')

  function changeTitle (title) {
    moduleTitle.value = title
  }

  function toggleDrawer () {
    showDrawer.value = !showDrawer.value
  }

  function hideDrawer () {
    showDrawer.value = false
  }

  return {
    changeTitle,
    toggleDrawer,
    hideDrawer,
    showDrawer,
    moduleTitle,
    options
  }
})
