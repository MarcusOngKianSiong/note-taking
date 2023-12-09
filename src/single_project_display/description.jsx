


export default function Description(prop){

    evaluateInputStatus(prop.description);

    return(
        <th style={{}}>
            
            <p>{prop.description.description} </p>
            <a href={prop.description.link}>More details...</a>
        </th>
    )

}


function evaluateInputStatus(data){
    if(typeof data !== "object"){
        throw new Error("Prop.description is not an object.");
        
    }else if(data.description === undefined || data.description.length === 0){
            throw new Error("Project description is empty");
        
    }else if(data.link === undefined || data.link.length <= 1){
        throw new Error("Project description is empty.");
    }
}

