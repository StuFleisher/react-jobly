



function JobCard({job}) {

  return(
    <div className="JobCard">
      <h3>{job.title}</h3>
      {job.salary ? <p>Salary: {job.salary}</p> : '' }
      {job.equity ? <p>Equity: {job.equity}</p> : '' }

    </div>
  )


}


export default JobCard;