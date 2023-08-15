<template>
  <q-drawer  @hide="$emit('hide')" :model-value="show" :width="350" class="drawer-color q-pl-lg q-pr-md"
    style="background-color: #F2F8FF" show-if-above>
    <div class="row justify-between q-px-md q-py-xl">
      <div>
        <h1 class="text-h5 text-weight-bold text-blue-10">
          The cocktail
        </h1>
      </div>
      <div class="row flex-center">
        <q-btn @click="$emit('hide')" icon="close" color="dark" flat round dense />
      </div>
    </div>
    <q-list padding class="menu-list">
      <q-item class="q-py-lg" clickable v-ripple>
        <q-item-section>
          <div class="text-weight-bold text-h5">
           Cocktails
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: 'DefaultDrawer',
  props: {
    options: { type: Array, default () { return [] } },
    show: { type: Boolean }
  }
}
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
.add-button
  border-radius: 50%
  background-color: $primary
  height: 15px
  width: 15px
</style>
