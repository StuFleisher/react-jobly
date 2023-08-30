import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import './CompanyCard.css'
import SearchForm from './SearchForm';

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

  console.log('***companies', companies);

  useEffect(function fetchCompaniesOnMount() {

    fetchCompanies();

  }, []);

  async function fetchCompanies(query) {
    const response = await JoblyApi.getAllCompanies(query);

    console.log('**response', response);
    setCompanies({ isLoading: false, all: response });
  }


  return (
    <div className="CompanyList">
      <h1>Companies page</h1>
      <SearchForm doSearch={fetchCompanies}/>
      {companies.all.map(company => (
        <CompanyCard company={company} key={company.handle} />
      ))}
    </div>
  );
}

export default CompanyList;