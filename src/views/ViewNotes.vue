<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
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

/*
	Keyboard Control (press enter to add note)
*/
function handleKeyboard(e) {

if (e.key === 'Enter') addNote()
}

onMounted(() => {
document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(() => {
document.removeEventListener('keyup', handleKeyboard)
})


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
		
		<Note 
			v-for="note in storeNotes.notes"
			:key="note.id"
			:note="note"
		/>
		
	</div>

</template>



<style lang="scss" scoped>

</style>