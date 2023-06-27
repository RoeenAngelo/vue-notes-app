<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'

/*
	Notes
*/
	const newNote = ref('')
	const newNoteRef = ref(null)

/*
	Store
*/

	const storeNotes = useStoreNotes()

	function addNote() {
		
		storeNotes.addNote(newNote.value)
		
		newNote.value = ''
		newNoteRef.value.focus()
	}


</script>


<template>
	<div class="notes">
		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea
						v-model="newNote"
					  class="textarea"
					  placeholder="Type Note"
						ref="newNoteRef"
					/>

		
				</div>
			</div>
			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button
						@click="addNote"
						:disabled="!newNote"
					  class="button is-link has-background-success"
					>
						Add New Note
					</button>
				</div>
			</div>
		</div>
		
		<Note 
			v-for="note in storeNotes.notes"
			:key="note.id"
			:note="note"
		/>
		
	</div>

</template>



<style lang="scss" scoped>

</style>