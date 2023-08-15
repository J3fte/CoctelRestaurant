import { defineStore } from 'pinia'
import { ref } from 'vue'
import employees from 'src/services/employees'
import { updatePagination, getDefaultPagination } from 'src/helpers/store'

export default defineStore('resourcesEmployees', () => {
  const rows = ref([])
  const loading = ref(false)
  const query = ref('')
  const pagination = ref(getDefaultPagination())

  function onSuccess (result) {
    loading.value = false
    rows.value = result.data
    pagination.value.rowsNumber = result.total
  }

  function onCatch () {
    loading.value = false
  }

  function index (paramsTable) {
    loading.value = true
    updatePagination(pagination, paramsTable)
    return employees.index({ ...paramsTable, query: query.value })
      .then(onSuccess)
      .catch(onCatch)
  }

  return {
    index,
    rows,
    loading,
    pagination,
    query
  }
})
