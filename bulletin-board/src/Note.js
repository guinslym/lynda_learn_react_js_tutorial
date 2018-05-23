import React,{Component} from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';

export default class Note extends Component {

    constructor(props){
    	super(props);
    	this.state = {
        editing: false,
      }

      this.edit = this.edit.bind(this)
      this.remove = this.remove.bind(this)
      this.save = this.save.bind(this)
      this.renderForm = this.renderForm.bind(this)
      this.renderDisplay = this.renderDisplay.bind(this)
      this.randomBetween = this.randomBetween.bind(this)
    }

    componentWillMount() {
  		this.style = {
  			right: this.randomBetween(0, window.innerWidth - 150, 'px'),
  			top: this.randomBetween(0, window.innerHeight - 150, 'px'),
  			transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
  		}
  	}

    shouldComponentUpdate(nextProps, nextState) {
  		return (
  			this.props.children !== nextProps.children || this.state !== nextState
  		)
  	}

    randomBetween(x,y,s){
      return x + Math.ceil(Math.random() * (y-x)) + s
    }

    edit() {
  		this.setState({
  			editing: true
  		})
  	}

  	remove() {
  		this.props.onRemove(this.props.index)
  	}


    	save(e) {
        e.preventDefault()
    		this.props.onChange(this._newText.value, this.props.index)
        this.setState({
          editing: false
        })
    	}

    	renderForm() {
    		return (
    			<div className="note" style={this.style}>
    				<form onSubmit={this.save}>
    					<textarea ref={input => this._newText = input }
                defaultValue={this.props.children} />
    					<button onClick={this.save}  id="save"><FaFloppyO /></button>
    				</form>
    			</div>
    		)
    	}

    renderDisplay() {
  		return (
  			<div className="note"  style={this.style}>
  				<p>{this.props.children}</p>
  				<span>
  					<button onClick={this.edit} id="edit"><FaPencil /></button>
  					<button onClick={this.remove} id="remove"><FaTrash /></button>
  				</span>
  			</div>
  		)
  	}

    render(){
        if(this.state.editing){
          return this.renderForm()
        }else{
          return this.renderDisplay()
        }
    }


}

/*
2.1 {this.props.children}
<textarea ref={input => this._newText = input }
  defaultValue=c {this.props.children} />

Whatever the CURRENT value of the NOTE we will render the TEXTAREA of this EDIT FORM with its content.
{this.props.children}

°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
2.2 renderDisplay()
<p>{this.props.children}</p>

renderDisplay will going to DISPLAY anything that contains the PARENT
or the value of the {note.note} in Board.eachNote

return (
  <Note key={note.id}
      index={note.id}
      onChange={this.update}
      onRemove={this.remove}>
      {note.note}
    </Note>
)
*/
