<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes'
import { useRoute, useRouter } from 'vue-router'
import { useWatchCharacters} from '@/use/useWatchCharacters'
/*
  Router
*/
  const route = useRoute()
  const router = useRouter()

/*
  Store
*/
  const storeNotes = useStoreNotes()

/*
  Note
*/
  const noteContent = ref('')
  noteContent.value = storeNotes.getNoteContent(route.params.id) 

/*
  HandleSaveClicked
*/
  function handleSaveClicked() {
   storeNotes.updateNote(route.params.id, noteContent.value)
   router.push('/')
  }

/*
	Keyboard Control (press enter to save)
*/
  function handleKeyboard(e) {

  if (e.key === 'Enter') handleSaveClicked()
  }

  onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
  })

  onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
  })

/*
	Watch Characters
*/
  useWatchCharacters(noteContent)

</script>


<template>
<AddEditNote
      v-model="noteContent"
			ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
		>
			<template v-slot:buttons>
        <button
          @click="$router.back()"
					class="button is-link is-light mr-2"
				>
						Cancel
				</button>
        <button
          @click="handleSaveClicked"
          :disabled="!noteContent"
          class="button is-link has-background-link"
				>
          Save Note
        </button>
			</template>
		</AddEditNote>
</template>


<style lang="scss" scoped>

</style>