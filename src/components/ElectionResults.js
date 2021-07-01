export const ElectionResults = ({ election }) => {
  return (
    <>
      <div>
        <h3>Election: {election.title}</h3>
        <table>
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
                  <tr key={index}>
                    <td>{proposition.description}</td>
                    <td>{proposition.votesFor}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
