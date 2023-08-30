import { useState } from "react";


function SearchForm({ doSearch }) {

  const [formData, setFormData] = useState({term: ''});

  /** Send search term to parent
 *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    doSearch(formData.term);
    setFormData({term: ''});
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (

    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="term">Search:</label>
        <input
          id="term"
          name="term"
          value={formData.term}
          onChange={handleChange}
        />

        <button>Search</button>
      </form>

    </div>


  );


}

export default SearchForm;