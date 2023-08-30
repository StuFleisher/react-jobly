import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from './JobCard';
import SearchForm from './SearchForm';

/** Renders a list of jobs
 *
 * Props:
 *
 * States:
 *
 * RoutesList -> Joblist -> {Searchform, JobCardList}
 */
function Joblist() {

  const [jobs, setJobs] = useState({ isLoading: true, jobs: [] });
  console.log('jobs', jobs);

  useEffect(function fetchJobsOnMount() {


    fetchJobs();
  }, []);

  async function fetchJobs(term) {
    const response = await JoblyApi.getAllJobs(term);
    console.log('response', response);
    setJobs({ isLoading: false, jobs: response})
  }



  return (

    <div>
      <h1>Joblist</h1>
      <SearchForm doSearch={fetchJobs} />
      {jobs.jobs.map( job => <JobCard job={job} /> )}
    </div>
  );
}


export default Joblist;