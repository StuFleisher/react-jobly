
/** Renders details for a particular job
 *
 * Props:
 * -job
 * {title, salary, equity}
 *
 * State:
 * -none
 *
 * JobCardList -> JobCard
 */


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