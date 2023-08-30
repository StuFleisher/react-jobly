import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import SearchForm from './SearchForm';

/** Renders a list of jobs
 *
 * Props:
 *
 * States:
 *
 * RoutesList -> Joblist -> {Searchform, JobCardList}
 */
function Joblist({filter}) {

  const [jobs, setJobs] = useState({ isLoading: true, jobs: [] });
  console.log('jobs', jobs);

  useEffect(function fetchJobsOnMount() {
    fetchJobs(filter);
  }, []);

  async function fetchJobs(query) {
    const response = await JoblyApi.getAllJobs(query);
    console.log('response', response);
    setJobs({ isLoading: false, jobs: response})
  }


  return (

    <div>
      <h1>Joblist</h1>
      <SearchForm doSearch={fetchJobs} />
      <JobCardList jobs={jobs.jobs}/>
    </div>
  );
}


export default Joblist;