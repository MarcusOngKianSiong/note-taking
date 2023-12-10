import Name from './name';
import Description from './description';
import { useEffect, useState } from 'react';

export default function Interface() {
  const [projects, setProjects] = useState(null);

  useEffect(()=>{
    console.log("HELLO");  // Moved here

    const data = [];
    const projects = obtainProjectData();

    projects.then(res => {
      return res.json();
    }).then(res => {
        console.log(res)
        data.push();
        for (const projectName in res) {
            data.push(<tr  key={projectName}><Name name={projectName} /><Description description={res[projectName]} /></tr>);
        }

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
  const data = await fetch('https://personal-back-end.onrender.com');
  return data;
}
