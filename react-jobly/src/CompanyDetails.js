import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import React from 'react';
import JoblyApi from './api.js';



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
      setCompanyDetails({
        company: response, isLoading: false
      });
    }
    fetchCompanyDetails();
  }, []);

  return (
    <div className="CompanyDetails">
      <h1>Company Details</h1>
      <h2>{companyDetails.company.name}</h2>
      <p>{companyDetails.company.description}</p>



    </div>
  );
}

export default CompanyDetails;