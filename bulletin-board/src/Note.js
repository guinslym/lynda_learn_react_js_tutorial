import React,{Component} from 'react';

export default class Note extends Component {

    render() {
        return (
            <div className="note">
                <p>Learning React</p>
                <span>
                  <button>Edit</button>
                  <button>Remove</button>
                </span>
            </div>
        );
    }
}
