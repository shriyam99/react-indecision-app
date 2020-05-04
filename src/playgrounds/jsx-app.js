var data = {
    title: 'Hello shriyam',
    subtitle: 'This is a para',
    location: 'India',
    options: []
};

const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.f1.value;
    if(option){
        data.options.push(option);
        render();
        e.target.f1.value = '';
    }
}

const removeAll = ()=>{
    data.options = [];
    render();
}

const makeDecision = ()=>{
    const rand = Math.floor(Math.random()*data.options.length);
    const randOption = data.options[rand];
    console.log(randOption);
}

var root = document.getElementById('root');

function render(){
    const template = (
    <div>
        {data.title && <h1>{data.title}</h1>}
        {data.subtitle && <p>{data.subtitle}</p>}  
        {data.location && <p>Location: {data.location}</p>}
        <ul>
            {
                data.options.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
        <button disabled={data.options.length===0} onClick={makeDecision}>What should I do?</button>
        <form onSubmit={onFormSubmit}>
            <input type="text" name='f1'/>
            <button >Add item</button>
            <button onClick={removeAll}>Remove All</button>
        </form>
    </div>
);
    ReactDOM.render(template, root);
}

render();
