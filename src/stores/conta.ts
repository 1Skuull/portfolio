import { defineStore } from "pinia"
import { ref } from "vue"


const useCounterStore = defineStore('counter', () => {

    const isActive = ref<boolean>(false)
    
    return { isActive }
  })

  export default useCounterStore