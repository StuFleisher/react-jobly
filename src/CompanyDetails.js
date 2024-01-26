import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import React from 'react';
import JoblyApi from './api.js';
import JobCardList from "./JobCardList.js";
import LoadingPage from "./LoadingPage.js";

/** Renders info on a particular company
 *
 * Props:
 * -none
 *
 * States:
 * -companyDetails:
 * { company: {}, isLoading: true}
 * { company: { description, handle, jobs, name, logoUrl} , isLoading: false}
 *
 * RoutesList -> CompanyDetails -> JobCardList
 */
function CompanyDetails() {

  const { handle } = useParams();
  const navigate = useNavigate();

  const [companyDetails, setCompanyDetails] = useState({
    company: {}, isLoading: true
  });


  useEffect(function fetchCompanyDetailsWhenMounted() {

    /** makes an api call to get details on a company*/
    async function fetchCompanyDetails() {
      try {
        const response = await JoblyApi.getCompany(handle);

        setCompanyDetails({
          company: response, isLoading: false
        });
      } catch (err) {

        navigate('/companies');
      }
    }
    fetchCompanyDetails();
  }, [handle, navigate]);

  //TODO: add handle as a dependency, declare navigate inside of useEffect;
  //maybe give users information, set state to indicate error


  return (
    companyDetails.isLoading
      ?
        <LoadingPage />
      :
        <div className="CompanyDetails">
          <h1>Company Details</h1>
          <h2>{companyDetails.company.name}</h2>
          <p>{companyDetails.company.description}</p>
          <JobCardList jobs={companyDetails.company.jobs} />
        </div>
  );
}

export default CompanyDetails;