import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";
import JoblyApi from "./api";

/** Renders a list of all companies
 * States: companies (object)
 *     {all:[{handle, name, description, numEmployees, logoUrl},...],
 *      isLoading:false},
 *
 * Props:
 *
 * RoutesList -> CompanyList -> CompanyCard
 */
function CompanyList() {

  const [companies, setCompanies] = useState({ all: [], isLoading: true });
  useEffect(function fetchCompaniesOnMount() {
    async function fetchCompanies() {
      const response = await JoblyApi.getAllCompanies();
      setCompanies({ isLoading: false, all: response.data });
    }

    fetchCompanies();

  }, []);


  return (
    <div className="CompanyList">
      <h1>Companies page</h1>
      {companies.map(company => (
        <CompanyCard company={company} key={company.handle} />
      ))}
    </div>
  );
}

export default CompanyList;