<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
	Notes
*/
	const newNote = ref('')
	const addEditNoteRef = ref(null)

/*
	Store
*/
	const storeNotes = useStoreNotes()

	function addNote() {
		
		storeNotes.addNote(newNote.value)
		
		newNote.value = ''
		addEditNoteRef.value.focusTextarea()
	}

/*
	Watch Characters
*/
	useWatchCharacters(newNote)
</script>


<template>
	
	<div class="notes">
		<AddEditNote
			v-model="newNote"
			ref="addEditNoteRef"
			placeholder="Add a new note"
		>
			<template v-slot:buttons>
				<button
						@click="addNote"
						:disabled="!newNote"
					  class="button is-link has-background-success"
					>
						Add New Note
					</button>
			</template>
		</AddEditNote>

		<!-- <div class="card has-background-success-dark p-4 mb-5">
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
		 -->
		<Note 
			v-for="note in storeNotes.notes"
			:key="note.id"
			:note="note"
		/>
		
	</div>

</template>



<style lang="scss" scoped>

</style>