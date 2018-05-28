import { observable } from 'mobx';
import uuid from 'uuid';

export default class Note {
  @observable text;

  constructor({ text, id = uuid() }) {
    this.id = id;
    this.text = text;
  }
}
