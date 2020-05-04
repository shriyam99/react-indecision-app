import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';
import ModalOption from './ModalOption';

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOneOption = this.deleteOneOption.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            options: props.options,
            selectedOption: undefined
        };
    }
    componentDidMount(){
        const json = localStorage.getItem('options');
        const options= JSON.parse(json);
        if(json)
            this.setState(()=>({options}));
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!==this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount(){

    }

    removeAll() {
        this.setState(()=>({options: []}));
    }
    
    deleteOneOption(arg){
        console.log(arg);
        this.setState((prev)=>({options: prev.options.filter((option)=>option!==arg)}))
    }
    pickOption(){
        const index = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[index];
        this.setState(()=>({selectedOption: option}));
    }

    addOption(option){
        if(!option)
            return 'Enter valid value';
        else if(this.state.options.indexOf(option)!==-1)
            return 'Option already added';
        this.setState((prev)=>({options: [...prev.options, option]}));
    }
    closeModal(){
        this.setState(()=>({selectedOption: undefined}));
    }
    render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of a computer!";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length>0} pickOption={this.pickOption}/>
                    <div className="widget">
                        <Options removeAll = {this.removeAll} deleteOneOption={this.deleteOneOption} options={this.state.options}/>
                        <AddOption onClick = {this.addOption}/>
                    </div>
                    <ModalOption selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
                </div>
                </div>
        );
    }
}

IndecisionApp.defaultProps = {options: ['Jump', 'Hop']};

export default IndecisionApp;