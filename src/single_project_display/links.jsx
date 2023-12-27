import React from "react"

const style = {
    width: "30%",
    height: "30%",
    margin: "-10px",
    justifySelf: "center",
    alignContent: "center",
    fontSize: '11px'
}
function checkIfURL(link){
        
    if(typeof link === "string"){
        if(link.includes('.com')){
            return true;
        }
        if(link.includes(".github.io")){
            return true;
        }
        if(link.includes(".notion.site"))
        return false;
    }else{
        return false;
    }
    
}

export const Github = (prop) => {
    return (
            <th >
                 {checkIfURL(prop.link) ? (
                        <>
                            <a href={prop.link}>
                                <img style={style} src={process.env.PUBLIC_URL + `/github icon.png`}/>
                                <p style={{fontSize: '10px'}}>Show source code</p>    
                            </a>
                        </>
                    ): (
                        <p style={{fontSize: '9px', color: 'red'}}><i>No Github Repo<br></br> attached</i></p>
                    )
                }   
            </th>
    )
}

export const Documentation = (prop) => {
    return (
        <th>
            {checkIfURL(prop.link) ? (
                    <>
                        <a href={prop.link}>
                            <img style={style} src={process.env.PUBLIC_URL + `/documentation icon.png`}/>
                            <p style={{fontSize: '9px'}}>Go to<br></br> Documentation</p>
                        </a>
                    </>
                ) : (
                    <p style={{fontSize: '9px', color: 'red'}}><i>No documentation<br></br> attached</i></p>
                )
            }
        </th>
    )
}

export const ProjectApp = (prop) => {
    const style = {
        width: "50%",
        height: "50%",
        margin: "-10px",
        justifySelf: "center",
        alignContent: "center",
        fontSize: '11px'
    }

    return (
        <th>
            {checkIfURL(prop.link) ? (
                    <>
                        <a href={prop.link}>
                            <img style={style} src={process.env.PUBLIC_URL + `/robot arm.webp`}/>
                            <p style={{fontSize: '9px'}}>PROJECT LINK</p>
                        </a>
                    </>
                ): (
                    <p style={{fontSize: '9px', color: 'red'}}><i>No web app<br></br> available</i></p>
                )
            }
          </th>  
        
        
    )
}


// module.exports = {Github}