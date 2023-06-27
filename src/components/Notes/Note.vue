<script setup>
import { useStoreNotes } from '@/stores/storeNotes'
import { computed } from 'vue';

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
				<a href="#" class="card-footer-item">Edit</a>
				<a
				  class="card-footer-item"
				  @click.prevent="storeNotes.deleteNote(note.id)"
          href="#" 
				>Delete
      </a>
			</footer>
	</div>
</template>



<style lang="scss" scoped>

</style>