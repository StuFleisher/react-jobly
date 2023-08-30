import JobCard from "./JobCard";

/** Renders a list of JobCards
 *
 * Props:
 * -jobs (an array of jobs)
 *
 *
 * State:
 * -none
 *
 * CompanyDetails -> JobCardList -> JobCard
 */
//TODO: give a classname for div, have an example for jobs
function JobCardList({jobs}){

  return (
    <div className='JobCardList'>
      {jobs.map( job => <JobCard job={job} key={job.id}/> )}
    </div>
  );
}

export default JobCardList;