import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: useLocalStorage('notes', [])
    }
  },
  actions: {
    addNote(newNoteContent) {
      let id = new Date().getTime().toString()
      let note = {
        id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    deleteNote(noteId){
        this.notes = this.notes.filter(item => item.id !== noteId)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(item => item.id === id)

      this.notes[index].content = content
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(item => item.id === id)[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(item => count += item.content.length)
      return count
    }
  }
})