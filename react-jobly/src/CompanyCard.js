import { Link } from "react-router-dom";

/** Renders info on a company
 *
 * Props:
 * -company: {handle, name, description, logoURL}
 * TODO: include an example
 *
 * State:
 * -none:
 *
 * CompanyList -> CompanyCard
 */


function CompanyCard({ company }) {
//TODO: maybe use Link instead of an a tag
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>{company.name}</Link>

        <div className="CompanyCard-image">
          {company.logoUrl
            ?
              <img src={company.logoUrl} alt={company.name} />
            :
              ''}

        </div>
        <p className="CompanyCard-description">{company.description}</p>

    </div>
  );
}


export default CompanyCard;


