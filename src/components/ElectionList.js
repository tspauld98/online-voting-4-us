export const ElectionList = ({ elections }) => {
  return (
    <table className="pure-table">
      <thead>
        <tr>
          <th>Election title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {elections &&
          elections.map((election, index) => (
            <tr
              key={election.id}
              className={index % 2 === 0 ? "pure-table-odd" : ""}
            >
              <td>{election.title}</td>
              <td>
                <a
                  href={"/viewElectionResults/" + election.id}
                  className="pure-button-primary"
                >
                  View results
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
