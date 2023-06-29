<script setup>
import { useStoreNotes } from '@/stores/storeNotes'
import { computed, reactive } from 'vue';
import ModalDeleteNote from './ModalDeleteNote.vue';

/*
	Store
*/

const storeNotes = useStoreNotes()

/*
  Props
*/
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})


/*
  Character Length
*/

  const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
  })

/*
  Modals
*/

	const modals = reactive({
		deleteNote: false
	})
</script>

<template>
	<div
	  class="card mb-4"
	>
			
			<div class="card-content">
				<div class="content">
					{{ note.content }}
				</div>
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
			</div>
			<footer class="card-footer">
				<RouterLink :to="`/editNote/${ note.id }`"
				  class="card-footer-item"
				  href="#"
          @click=""
				>
          Edit
        </RouterLink>
				<a
				  class="card-footer-item"
				  @click.prevent="modals.deleteNote = true"
          href="#" 
				>Delete
      </a>
			</footer>
			<ModalDeleteNote
				v-if="modals.deleteNote"
				v-model="modals.deleteNote"
			/>
	</div>
</template>



<style lang="scss" scoped>

</style>