export const ElectionResults = ({ election }) => {
  return (
    <table className="pure-table">
      <thead>
        <tr>
          <th>Proposition</th>
          <th>Votes count</th>
        </tr>
      </thead>
      <tbody>
        {election.propositions &&
          election.propositions.map((proposition, index) => {
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? "pure-table-odd" : ""}
              >
                <td>{proposition.description}</td>
                <td>{proposition.votesFor}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
