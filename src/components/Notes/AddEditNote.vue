<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus'

/*
  Props
*/
  const props = defineProps({
  modelValue: {
    type: String,
    require: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String
  }
})

/*
  Emits
*/
  const emit = defineEmits(['update:modelValue'])

/*
  Focus Text Area
*/
  const textareaRef = ref(null)

  function focusTextarea() {
    textareaRef.value.focus()
  }

  defineExpose({
    focusTextarea
  })

</script>

<template>
		<div 
      class="card p-4 mb-5"
      :class="`has-background-${ bgColor }-dark`"
    >
      <label
        v-if="props.label"
        class="label has-text-white"
      >
        {{ label }}
      </label>
			<div class="field">
				<div class="control">
					<textarea
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
					  class="textarea"
					  :placeholder="props.placeholder"
						ref="textareaRef"
            v-autofocus
            maxlength="100"
					/>

		
				</div>
			</div>
			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<slot name="buttons" />
				</div>
			</div>
		</div>
</template>



<style lang="scss" scoped>

</style>