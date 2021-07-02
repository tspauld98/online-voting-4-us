import { VoterEditRow } from "./VoterEditRow";
import { VoterViewRow } from "./VoterViewRow";

import "./VoterRoll.css";

export const VoterRoll = ({
  voterEdit,
  voterSort,
  voters,
  onEditClick: editVoter,
  onCancelClick: cancelVoterEdit,
  onSortClick: setVoterSort,
  onUpdateClick: updateVoter,
  onRemoveClick: removeVoter,
  onReturnClick: viewRegisterMain }) => {

  const ascSortImgPath = "assets/images/glyphicons-basic-476-sort-asc.png";
  const dscSortImgPath = "assets/images/glyphicons-basic-477-sort-dsc.png";

  const sortVoters = (name) => {
    if (voterSort.element === name) {
      setVoterSort({
        element: name,
        ascending: (!voterSort.ascending),
      });
    } else {
      setVoterSort({
        element: name,
        ascending: true,
      });
    }
    // console.log(voterSort);
    // console.log(voters);
    voters.sort((a, b) => {
      var elementA, elementB;
      
      if (voterSort.type === "String") {
        elementA = a[voterSort.element].toUpperCase(); 
        elementB = b[voterSort.element].toUpperCase();
      } else {
        elementA = a[voterSort.element];
        elementB = b[voterSort.element];
      }

      if (voterSort.ascending) {
        if (elementA > elementB) {
          return -1;
        }
        if (elementA < elementB) {
          return 1;
        }
      } else {
        if (elementA < elementB) {
          return -1;
        }
        if (elementA > elementB) {
          return 1;
        }
      }
      return 0;
     });
  };

  return (<>
    <h1>Voter Registration Tool</h1>
    <h2>Voter Roll</h2>
    <div>
      <table className="pure-table pure-table-bordered">
        <thead>
          <tr>
            <th onClick={() => sortVoters("id")}>ID { (voterSort.element === "id" && voterSort.ascending)
              ? <img className="sortIcon" src={ascSortImgPath} alt="Sorted Ascending"/>
              : ((voterSort.element === "id" && voterSort.ascending !== true)
                && <img className="sortIcon" src={dscSortImgPath} alt="Sorted Descending"/>) } </th>
            <th onClick={() => sortVoters("firstName")}>First Name { (voterSort.element === "firstName" && voterSort.ascending)
              ? <img className="sortIcon" src={ascSortImgPath} alt="Sorted Ascending"/>
              : ((voterSort.element === "firstName" && voterSort.ascending !== true)
                && <img className="sortIcon" src={dscSortImgPath} alt="Sorted Descending"/>) }</th>
            <th onClick={() => sortVoters("lastName")}>Last Name { (voterSort.element === "lastName" && voterSort.ascending)
              ? <img className="sortIcon" src={ascSortImgPath} alt="Sorted Ascending"/>
              : ((voterSort.element === "lastName" && voterSort.ascending !== true)
                && <img className="sortIcon" src={dscSortImgPath} alt="Sorted Descending"/>) }</th>
            <th onClick={() => sortVoters("address")}>Street Address { (voterSort.element === "address" && voterSort.ascending)
              ? <img className="sortIcon" src={ascSortImgPath} alt="Sorted Ascending"/>
              : ((voterSort.element === "address" && voterSort.ascending !== true)
                && <img className="sortIcon" src={dscSortImgPath} alt="Sorted Descending"/>) }</th>
            <th onClick={() => sortVoters("city")}>City { (voterSort.element === "city" && voterSort.ascending)
              ? <img className="sortIcon" src={ascSortImgPath} alt="Sorted Ascending"/>
              : ((voterSort.element === "city" && voterSort.ascending !== true)
                && <img className="sortIcon" src={dscSortImgPath} alt="Sorted Descending"/>) }</th>
            <th onClick={() => sortVoters("birthdate")}>Birth Date { (voterSort.element === "birthdate" && voterSort.ascending)
              ? <img className="sortIcon" src={ascSortImgPath} alt="Sorted Ascending"/>
              : ((voterSort.element === "birthdate" && voterSort.ascending !== true)
                && <img className="sortIcon" src={dscSortImgPath} alt="Sorted Descending"/>) }</th>
            <th onClick={() => sortVoters("email")}>Email { (voterSort.element === "email" && voterSort.ascending)
              ? <img className="sortIcon" src={ascSortImgPath} alt="Sorted Ascending"/>
              : ((voterSort.element === "email" && voterSort.ascending !== true)
                && <img className="sortIcon" src={dscSortImgPath} alt="Sorted Descending"/>) }</th>
            <th onClick={() => sortVoters("phone")}>Phone { (voterSort.element === "phone" && voterSort.ascending)
              ? <img className="sortIcon" src={ascSortImgPath} alt="Sorted Ascending"/>
              : ((voterSort.element === "phone" && voterSort.ascending !== true)
                && <img className="sortIcon" src={dscSortImgPath} alt="Sorted Descending"/>) }</th>
            <th>Operatons</th>
          </tr>
        </thead>
        <tbody>{voters.map(voter => voterEdit === voter.id 
          ? <VoterEditRow key={voter.id} voter={voter} onSaveClick={updateVoter} onCancelClick={cancelVoterEdit} /> 
          : <VoterViewRow key={voter.id} voter={voter} onEditClick={editVoter} onRemoveClick={removeVoter} />)}</tbody>
      </table>
      <br/>
      <button className="pure-button pure-button-primary" onClick={viewRegisterMain}>Return To Registration Menu</button>
    </div>
  </>);
};