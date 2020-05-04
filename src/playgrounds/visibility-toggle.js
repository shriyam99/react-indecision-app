const data = {
    header: 'Visibility Toggle'
}
let bool = false;
const buttonClick = ()=>{
    bool = !bool;
    render();
}

const root = document.getElementById('root');
const render = ()=>{
    const template = (
        <div>
            {data.header && <h1>{data.header}</h1>}
            <button onClick={buttonClick}>{bool? 'Hide Details' : 'Show Details'}</button>
            {bool && <p>Hey! These are the details you can see!</p>}
        </div>
    );
    ReactDOM.render(template, root);
}

render();