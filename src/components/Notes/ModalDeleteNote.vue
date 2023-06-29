<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'

/*
  Props
*/
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    }
  })

/*
  Close Modal
*/
  function closeModal() {
    emit('update:modelValue', false)
  }

/*
  Emits
*/
  const emit = defineEmits(['update:modelValue'])

/*
	Click Outside to close
*/
	const modalCardRef = ref(null)

	onClickOutside(modalCardRef, closeModal)

/*
	Keyboard Control (press escape key to close modal)
*/

  function handleKeyboard(e) {
    console.log('closed')
    if (e.key === 'Escape') closeModal()
  }

  onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
  })

  onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
  })
</script>

<template>
  <div
    class="modal is-active p-3"
  >
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        >

        </button>
      </header>
      <section class="modal-card-body">
        Are you sure?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          class="button"
          @click="closeModal"
        >
          Cancel
        </button>
        <button
          class="button is-danger"
        >
          Delete
        </button>

      </footer>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>