import JobCard from "./JobCard";


function JobCardList({jobs}){

  return (
    <div>
      {jobs.map( job => <JobCard job={job} key={job.id}/> )}
    </div>
  );
}

export default JobCardList