import React,{Component} from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';

export default class Note extends Component {

    constructor(props){
    	super(props);
    	this.state = {};

      this.edit = this.edit.bind(this)
      this.remove = this.remove.bind(this)
    }

    edit(){
      alert('editing notes')
    }

    remove(){
      alert('removing notes')
    }
    render() {
        return (
            <div className="note">
                <p>Learning React</p>
                <span>
                  <button id="edit" onClick={this.edit}><FaPencil /></button>
                  <button id="remove" onClick={this.remove}><FaTrash /></button>
                </span>
            </div>
        );
    }
}
