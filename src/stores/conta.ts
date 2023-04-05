import { ref } from "vue"
import { defineStore } from "pinia"


const useCounterStore = defineStore('counter', () => {

    const isActive = ref<boolean>(false)
    
    return { isActive }
  })

  export default useCounterStore