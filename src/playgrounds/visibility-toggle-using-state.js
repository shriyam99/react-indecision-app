class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleClick(){
        this.setState((prev)=>{
            return {
                visibility: !prev.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleClick}>{this.state.visibility? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>Hey! These are the details you can see!</p>}
            </div>
        );
    }
}

const root = document.getElementById('root');
ReactDOM.render(<Visibility />, root);