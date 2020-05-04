import React from 'react';
import Option from './Option';

const Options = (props)=> {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button button--link" onClick={props.removeAll}>Remove All</button>
            </div>
            
            {props.options.length===0 && <p className="widget__message">Please add an option</p>}
            {/* <ol> */}
                {props.options.map((item, index)=>{
                    return <Option key={index} text={item} count={index} deleteOneOption={props.deleteOneOption}/>;
                })}
            {/* </ol> */}
        </div>
        
    );
}

export default Options;