<template>
  <q-header
    :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'"
    class="q-py-sm"
  >
    <q-toolbar>
      <q-btn
        @click="$emit('click-menu')"
        icon="menu"
        color="black"
        dense
        flat
        round
      />
      <h1 class="text-h5 text-weight-bold text-blue-10 q-ml-lg">
        {{ title }}
      </h1>
      <q-space />
      <q-avatar square>
        <q-img
          fit="scale-down"
          src='../../../images/Coctel.jpg'
          style="height: 100%"
        />
      </q-avatar>
      <user-avatar
        @logout="$emit('logout')"
        :name="userName"
        :comming-out="commingOut"
        class="q-ml-md"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import UserAvatar from './avatar/index.vue'

export default {
  name: 'DefaultHeader',
  components: { UserAvatar },
  props: {
    title: { type: String, default () { return '' } },
    userName: { type: String },
    commingOut: { type: Boolean }
  }
}
</script>
