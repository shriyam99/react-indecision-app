class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            counter: props.counter
        }
    }

    componentDidMount(){
        const counter = parseInt(localStorage.getItem('counter'));
        this.setState(()=>({counter}))
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.counter!==this.state.counter){
            localStorage.setItem('counter', this.state.counter);
        }
    }
    addOne(){
        this.setState((prevState)=>({ counter: prevState.counter+1 }));
    }
    minusOne(){
        this.setState((prevState)=>({ counter: prevState.counter-1 }));
    }
    reset(){
        this.setState((prevState)=>({ counter: 0 }));
    }

    render(){
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>0</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    counter: 0
}

const root = document.getElementById('root');
ReactDOM.render(<Counter/>, root);