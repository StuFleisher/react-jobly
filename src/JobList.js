import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import SearchForm from './SearchForm';
import LoadingPage from "./LoadingPage";

/** Renders a list of jobs
 *
 * Props:
 *
 * States:
 * -jobs
 * -{isLoading: true, jobs: []}
 * -{isLoading: false, jobs: [id, title, salary, equity]}
 *
 * RoutesList -> Joblist -> {Searchform, JobCardList}
 */
//TODO: be consistent with naming: JobList, CompanyList
function JobList() {

  const [jobs, setJobs] = useState({ isLoading: true, jobs: [] });

  useEffect(function fetchJobsOnMount() {
    fetchJobs();
  }, []);

  /** makes an API call to get a list of all jobs filtered by title */
  async function fetchJobs(title) {

      const response = await JoblyApi.getAllJobs(title);
      setJobs({ isLoading: false, jobs: response });

  }


  return (

    <div>
      <h1>Joblist</h1>
      <SearchForm doSearch={fetchJobs} />
      {jobs.isLoading
        ?
        <LoadingPage />
        :
        <JobCardList jobs={jobs.jobs} />}
    </div>
  );
}


export default JobList;