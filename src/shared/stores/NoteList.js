import { observable, computed, action } from 'mobx';
import Note from './Note';


export default class NoteList {
  @observable notes = [];
  @observable _filter = ''

  @computed get filteredNotes() {
    return this.notes.filter(note =>
      note.text.toLowerCase().includes(this._filter));
  }

  @action addNote(note) {
    this.notes.push(new Note(note));
  }

  @action addNotes(notes) {
    const newNotes = notes.map(note => new Note(note));
    this.notes.push(...newNotes);
  }

  set filter(filter) {
    if (typeof filter === 'string') {
      this._filter = filter.toLowerCase();
    }
  }

  static fromJS(store) {
    const noteList = new NoteList();
    noteList.addNotes(store.notes);
    noteList.filter = store.filter;
    return noteList;
  }
}
