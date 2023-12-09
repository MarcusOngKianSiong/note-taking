

export default function name(prop){
    
    evaluateInputStatus(prop.name)

    return(
        <th style={{}}>
            <p>{prop.name}</p>
        </th>
    )
}

function evaluateInputStatus(data){
    if(typeof data === undefined){
        throw new Error("Prop.name is undefined");
    }
}