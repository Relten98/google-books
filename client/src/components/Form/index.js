import React from "react";

export function Input(props){
    return (
        <div className="form-group">
            <input className="form-control" {...props}/>
        </div>
    );
}
// export function Btn(props){
//     return (
        
//     <button {...props} 
//         style={{
//             paddingLeft : 40,
//             paddingRight : 40,
//             marginBottom: 10, 
//             float:"right", 
//             marginLeft: 10 }}
//         className="btn btn-primary">
//         {props.children}
//     </button>
        
        
//     )
// }