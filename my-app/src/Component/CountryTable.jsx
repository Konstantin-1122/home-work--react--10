import React, { useState, useEffect } from "react";

function CountryTable({title,  onSelectContry}) {
  const [coutries, setCoutries] = useState([]);
  const [visbiliti, setVisbiliti] = useState(5);
  useEffect(() => {
     fetch('https://restcountries.com/v3.1/all')
      .then((resp) => resp.json())
      .then((data) => setCoutries(data.slice(0, visbiliti)));
  }, [visbiliti]);
  function loadMore() {
    setVisbiliti((visbiliti) => visbiliti + 5);
  }

  return (
    <div>
        <h3 className="tex-center">
           {/*{props.title}*/}
           {title}
        </h3>
         <div className="p-5 tex-center" >
        <button className="btn btn-success" onClick={loadMore}> загрузить</button>
      </div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">назва</th>
            <th scope="col">официально</th>
            <th scope="col">регион</th>
             <th scope="col">населения</th>
              <th scope="col">флаг</th>
               <th scope="col">действия</th>
          </tr>
        </thead>
        <tbody>
         {coutries.map((country, index)=>{
             return <tr key={index}>
                <td>
                    {country.name.common}
                </td>
                 <td>
                    {country.name.official}
                </td>
                 <td>
                    {country.region}
                </td>
                 <td>
                    {country.population}
                </td>
                 <td>
                  <img style={{maxWidth: '100px'}} src={country.flags.png} alt={country.flags.alt} />
                </td>
                 <td>
                   <button className="btn btn-primary" onClick={()=>{onSelectContry(country)}}>долбавить к списку выбранных</button>
                </td>

             </tr>
         })}
        </tbody>
      </table>
      <div className="p-5 tex-center" onClick={loadMore}>
        <button className="btn btn-success"> загрузить</button>
      </div>
    </div>
  );
}

export default CountryTable;
