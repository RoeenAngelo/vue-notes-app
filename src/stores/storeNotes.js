import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        {
          id: 'id1',
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus explicabo deleniti aut alias quibusdam! Veniam recusandae explicabo magnam odio consequatur pariatur deserunt, quae laboriosam non architecto. Libero ea nulla magnam.'
        },
        {
          id: 'id2',
          content: ' Natus explicabo deleniti aut alias quibusdam! Veniam recusandae explicabo magnam odio consequatur pariatur deserunt, quae laboriosam non architecto. Libero ea nulla magnam.'
        }, 
        {
          id: 'id3',
          content: ' adfsfaf explicabo deleniti aut alias quibusdam! Veniam recusandae explicabo magnam odio consequatur pariatur deserunt, quae laboriosam non architecto. Libero ea nulla magnam.'
        },
      ]
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


    }
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