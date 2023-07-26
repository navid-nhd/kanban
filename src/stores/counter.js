import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const cardData = defineStore('counter', () => {
  const count = ref(1)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
   const array = []
  return { count, doubleCount, increment }
})
