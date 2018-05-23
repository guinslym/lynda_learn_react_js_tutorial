import React, { Component } from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component{
	constructor(props) {
		super(props)
		this.state = {
			notes: [	]
		}
		this.eachNote = this.eachNote.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.add = this.add.bind(this)
		this.nextId = this.nextId.bind(this)
	}

  componentWillMount() {
    var self = this
        fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
          .then(response => response.json())
          .then(json => json[0]
              .split('. ').forEach(sentence => self.add(sentence.substring(0, 25))))
  }

  add(text){
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
    }))
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

	update(newText, i) {
		console.log('updating item at index', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
	}

  remove(id){
    console.log('removing item at', id)
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

	eachNote(note, i) {
		return (
      <Note key={note.id}
				  index={note.id}
				  onChange={this.update}
          onRemove={this.remove}>
				  {note.note}
		    </Note>
		)
	}

	render() {
		return (
			<div className="board">
				{this.state.notes.map(this.eachNote)}
        <button onClick={this.add.bind(null, "new Note")} id="add">
          <FaPlus />
        </button>
			</div>
		)
	}
}

export default Board


/*
1.1 (Fetch)
fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
.then(response => response.json())
.then(json => json[0]
.split('. ').forEach(sentence => self.add(sentence.substring(0, 25))))

We are creating a variable call response that contains the Data and will convert this Data into json.
We will create a variable called Json and that  will contain the response.json[0]

For each sentence we will create a new Note by adding the Lorem content to a new Note.

°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
1.2 Add
this.setState(prevState => ({
notes: [
...prevState.notes,
{
id: this.nextId(),
note: text
}
]
}))
Take the previousState and perform this function.  We want to reset the variable NOTES:
So the variable Note will be equal to Any value that the Notes already contains ..prevState.notes and
we will append this new Note Object

Previous State is equal to all of the Object in the setState NOT just one object

°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
1.3 update
this.setState(prevState => ({
notes: prevState.notes.map(
note => (note.id !== i) ? note : {...note, note: newText}
)
Like the ADD but we will try to filter which note that needs to be update.

note => (note.id !== i) ? note : {...note, note: newText}
If we are not updating the NOTE we will return it as is. Otherwise :  we will RETURN a
New Object, that will pass in all of the KEYS of the Note, but it's going to overwrite the TEXT for the
NOTE key.
{...note, note: newText}


°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
1.4 button
<button onClick={this.add.bind(null, "new Note")} id="add">

It will call this ADD function but I want to send some content to each Note. So everytime
I am adding a New Note, I want to CREATE  it with some TEXT. We are NOT going to BIND any variable
like THIS. So that's why we use NULL, instead we are going to pass a STRING that will
be populated into each NOTE
*/
