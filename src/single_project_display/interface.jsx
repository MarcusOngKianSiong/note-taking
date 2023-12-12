import Name from './name';
import Description from './description';
import { useEffect, useState } from 'react';

export default function Interface() {
  const [projects, setProjects] = useState(null);

  useEffect(()=>{
    console.log("HELLO");  // Moved here
    
    const data = [];
    obtainProjectData().then(res => {
      return res.json();
    }).then(res => {

        /* Example of data received:
        {
              "Project": [
                    "Personal testing framework",
                    "Shader management tool",
                    "Basic web scrapping tool",
                    "Document management tool"
              ],
              "Description": [
                    "Create a simplistic version of jasmine testing framework without all the bells and whistles",
                    "A tool that assist in modifying existing shader program components in isolation while being able to view the variables in a specific program using commands in the terminal. ",
                    "A tool to scrape data from html based on specific html patterns",
                    "A tool that allow you to view all function documentations in a project while ensuring that those documentations are up to date through its structure (1) and correction tools. \n\n1. Format of the documentation, where is the documentation palced, etc. "
              ],
              "Link": [
                    "lala",
                    null,
                    null,
                    null
              ]
        }
        */
        const length = res.Project.length;
        for(let i = 0;i<length;i++){
            data.push(<tr  key={i}><Name name={res.Project[i]} /><Description description={{description: res.Description[i], link: res.Link[i]}}/></tr>)
        }
        // for (const projectName in res) {
        //     data.push(<tr  key={projectName}><Name name={projectName} /><Description description={res[projectName]} /></tr>);
        // }
        
        setProjects(
            <table >
                <thead  key={"Projects"}>
                    <tr>
                            <th style={{borderBottom: '1px solid black'}}>
                                <p>Project</p>
                            </th>
                            <th style={{borderBottom: '1px solid black'}}>
                                <p>Description</p>
                            </th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>    
            </table>
        );
    });

  }, []);

  return (
    <div style={{ fontFamily: 'Roboto Mono, monospace' , display: 'flex', flexDirection: 'column', maxWidth: '55%', minWidth: '1000px',padding: '2%'}}>
      <h2>List of projects</h2>
      {projects};
    </div>
  );
}

/**
 * @abstract Obtain data
 * @output 
 * {
 *      name: {
 *          description: '', 
 *          link: ''
 *      }
 * }
 * 
 */
async function obtainProjectData() {
  const data = await fetch('https://personal-back-end.onrender.com/projects');
  return data;
}
