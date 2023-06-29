<script setup>
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import { ref } from 'vue';
import { vAutofocus } from '../directives/vAutofocus';

/*
	Store
*/
const storeNotes = useStoreNotes()

/*
	Feedback Input
*/
	const feedback = ref('')
	useWatchCharacters(feedback, 50)
</script>


<template>
    <div class="stats">
			<table class="table is-fullwidth">
				<thead>
						<tr>
							<th>Stat</th>
							<th>Value</th>
						</tr>
				</thead>
				<tbody>
					<tr>
						<td>Number of Notes</td>
						<td>{{ storeNotes.totalNotesCount }}</td>
					</tr>
					<tr>
						<td>Number of Characters</td>
						<td>{{ storeNotes.totalCharactersCount }}</td>
					</tr>
				</tbody>
			</table>
			<input
				class="input"
				type="text"
				placeholder="Feedback"
				v-autofocus
				v-model="feedback"
				maxlength="50"			  
			/>
    </div>
</template>



<style lang="scss" scoped>

</style>