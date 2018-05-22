import React,{Component} from 'react';
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'



export default class Class extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }
  }

  componentWillMount() {
    
  }

    render() {
        return (
            <div className="class-name">
                content
            </div>
        );
    }
}
