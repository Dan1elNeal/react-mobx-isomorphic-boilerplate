import React, { Component } from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import Note from '../Note';
import './styles.css';

@inject('noteList')
@observer
export default class Notes extends Component {
  onInputChange = (event) => {
    this.props.noteList.filter = event.target.value;
  }

  render() {
    const { filteredNotes } = this.props.noteList;
    return (
      <section styleName="notes">
        <div styleName="notes__lamp">
          <img
            src="static/creative.svg"
            alt="lamp"
            width="140px"
          />
        </div>
        <input
          type="text"
          onChange={this.onInputChange}
          styleName="notes__input"
          placeholder="Search"
        />
        <ul styleName="notes__list">
          {filteredNotes.map(note => (
            <Note
              key={note.id}
              note={note}
            />
          ))
          }
        </ul>
      </section>
    );
  }
}

Notes.wrappedComponent.propTypes = {
  noteList: PropTypes.observableObject.isRequired
};
