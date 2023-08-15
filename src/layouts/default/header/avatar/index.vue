<template>
  <q-btn-dropdown
    no-caps
    unelevated
    auto-close
    dropdown-icon="person"
    rounded
    size="sm"
    class="q-py-sm q-px-sm"
    color="primary"
    no-icon-animation
  >
    <q-list>
      <q-item class="text-primary text-weight-bold q-mt-sm">
        <q-item-section>
          <q-item-label>
            <span class="text-grey-8">Hola</span>,
            {{ name }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        @click="$emit('logout')"
        :disable="commingOut"
        clickable
      >
        <q-item-section>
          <q-item-label>
            <q-spinner
              v-if="commingOut"
              class="q-mr-md"
            />
            Cerrar sesión
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: 'SecurityAvatar',
  props: {
    name: {
      type: String
    },
    commingOut: {
      type: Boolean
    }
  }
}
</script>
