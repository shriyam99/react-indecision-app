import React from 'react';

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
        this.submitHandle = this.submitHandle.bind(this);
    }
    submitHandle(e) {
        e.preventDefault();
        let option = e.target.option.value.trim();
        let error = this.props.onClick(option.trim());
        this.setState(()=>({error}));
        e.target.option.value = '';
    }
    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.submitHandle}>
                    <input className="add-option__input" type="text" placeholder="Enter the value" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;