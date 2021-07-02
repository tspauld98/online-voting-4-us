export const ElectionList = ({ elections }) => {
  return (
    <>
      <h1>Election Tools</h1>
      <div>
        <a href="/createElection">Create an election</a>
      </div>

      <table>
        <thead>
          <tr>
            <th>Election title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {elections &&
            elections.map((election) => (
              <tr key={election.id}>
                <td>{election.title}</td>
                <td>
                  <a href={"/viewElectionResults/" + election.id}>
                    View results
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
