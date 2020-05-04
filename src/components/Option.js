import React from 'react';

const Option = (props)=> {
    return (
        <div className="option">
        <p className="option__text">
            {props.count+1}. {props.text}
        </p>
        <button className="button button--link" onClick={()=>props.deleteOneOption(props.text)}>remove</button>
        </div>
        
    );
}

export default Option;