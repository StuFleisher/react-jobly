import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import './CompanyCard.css';
import SearchForm from './SearchForm';
import LoadingPage from "./LoadingPage";

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


  /** makes an API call to get all companies filtered by name  */
  async function fetchCompanies(nameLike) {
    //TODO: rename the var in 33
    const companiesListFromResponse = await JoblyApi.getAllCompanies(nameLike);

    console.log('**response', companiesListFromResponse);
    setCompanies({ isLoading: false, all: companiesListFromResponse });
  }



  return (
    <div className="CompanyList">
      <h1>Companies page</h1>
      <SearchForm doSearch={fetchCompanies} />

      {!companies.isLoading
        ?
        companies.all.map(company => (
          <CompanyCard company={company} key={company.handle} />))

        :
        <LoadingPage />}


    </div>
  );
}

export default CompanyList;