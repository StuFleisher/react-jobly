
function CompanyCard({ company }) {

  return (
    <div className="CompanyCard">
      <a href={`/companies/${company.handle}`}>
        <p className="CompanyCard-name">{company.name}</p>
        <div className="CompanyCard-image">
          <img src={`/${company.logoUrl}`} alt={company.name} />
        </div>
        <p className="CompanyCard-description">{company.description}</p>
      </a>
    </div>
  );
}


export default CompanyCard;


