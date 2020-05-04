class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOneOption = this.deleteOneOption.bind(this);
        this.state = {
            options: props.options
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
        alert(option);
    }

    addOption(option){
        if(!option)
            return 'Enter valid value';
        else if(this.state.options.indexOf(option)!==-1)
            return 'Option already added';
        this.setState((prev)=>({options: [...prev.options, option]}));
    }
    render(){
        const title="Indecision";
        const subtitle="Put your life in the hands of a computer!";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length>0} pickOption={this.pickOption}/>
                <Options removeAll = {this.removeAll} deleteOneOption={this.deleteOneOption} options={this.state.options}/>
                <AddOption onClick = {this.addOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {options: ['Jump', 'Hop']};

const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'sample title'
}

const Action = (props)=>{
    return (    
        <div>
            <button disabled={!props.hasOptions} onClick={props.pickOption}>What should I do?</button>
        </div>
    );
}


const Options = (props)=> {
    return (
        <div>
            <button onClick={props.removeAll}>Remove All</button>
            {props.options.length===0 && <p>Please add an option</p>}
            <ul>
                {props.options.map((item, index)=>{
                    return <Option key={index} text={item} deleteOneOption={props.deleteOneOption}/>;
                })}
            </ul>
        </div>
        
    );
}

const Option = (props)=> {
    return <li>{props.text}<button onClick={()=>props.deleteOneOption(props.text)}>Delete this</button></li>
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
        this.submitHandle = this.submitHandle.bind(this);
    }
    submitHandle(e){
        e.preventDefault();
        let option = e.target.option.value.trim();
        let error = this.props.onClick(option.trim());
        // console.log(error);
        this.setState(()=>({error}));
        e.target.option.value = '';
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitHandle}>
                    <input type="text" placeholder="Enter the value" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}



const root = document.getElementById('root');
ReactDOM.render(<IndecisionApp />, root);