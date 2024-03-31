//Table to show data
function ResultData(props){
    return (
      //HTML for page
      <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Graduation Year</th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((data, index) => (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
    )
  }

  export default ResultData;