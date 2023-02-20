import { useState } from "react";
function App() {

  const [job, setJobs] = useState([])
  const [jobList, setJobsList] = useState(() => {
    const dataGet = localStorage.getItem("jobList");
    return JSON.parse(dataGet) || []
  })

  const handleSubmit = () => {
    setJobsList(() => {
      const data = [...jobList,job];
      localStorage.setItem("jobList", JSON.stringify(data));
      return data
    })
    setJobs([]);

  }

  const handleDel = (e) => {
    const dataDel = jobList.filter((i,k) => k !== e)
    localStorage.setItem("jobList", JSON.stringify(dataDel));
    setJobsList(dataDel)
  }
  
  return (
    <div style={{ padding: 20 }}>
      <input value={job} onChange={e => setJobs(e.target.value)}/>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobList.map((i,k) => {
           return <li key={k}>{i} <button onClick={() => handleDel(k)}>del</button></li>
        })}
      </ul>

    </div>
  );
}

export default App;
