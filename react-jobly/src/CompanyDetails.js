import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import React from 'react';
import JoblyApi from './api.js';
import JobCardList from "./JobCardList.js";


/** Renders info on a particular company
 *
 * States:
 *
 * Props:
 *
 * RoutesList -> CompanyDetails -> CompanyCard
 */
function CompanyDetails() {

  const { handle } = useParams();

  const [companyDetails, setCompanyDetails] = useState({
    company: {}, isLoading: true
  });

  console.log('***companyDetails', companyDetails);


  useEffect(function fetchCompanyDetailsWhenMounted() {
    async function fetchCompanyDetails() {
      const response = await JoblyApi.getCompany(handle);
      console.log("***response", response)
      setCompanyDetails({
        company: response, isLoading: false
      });
    }
    fetchCompanyDetails();
  }, []);



  return (
    companyDetails.isLoading
      ?
        <p>Loading...</p>
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