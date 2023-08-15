<template>
  <q-layout view="lHh lpR fFf">
    <default-header
      @click-menu="onClickMenu"
      @logout="onLogout"
      :title="layout.moduleTitle"
    />
    <default-drawer
      @hide="onHideDrawer"
      :show="layout.showDrawer"
      :options="layout.options"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DefaultHeader from './header/index.vue'
import DefaultDrawer from './drawer/index.vue'
import setup from './hook'

export default {
  name: 'LayoutDefault',
  components: {
    DefaultHeader,
    DefaultDrawer
  },
  setup
}
</script>
