import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

<<<<<<< HEAD
const dataCols = [
    { name: 'id', caption: 'Id' },
    { name: 'firstName', caption: 'First Name' },
    { name: 'lastName', caption: 'Last Name' },
    { name: 'address', caption: 'Address' },
    { name: 'city', caption: 'City' },
    { name: 'birthdate', caption: 'Birthdate' },
    { name: 'email', caption: 'Email' },
    { name: 'phone', caption: 'Phone' },
];

const sortArrowWrapper = (col, dir) => aCol => {
    if (col === aCol) {
      return dir === 'asc' ? 'v' : '^';
    } else {
      return '';
    }
};

const sortHeaderColWrapper = (sortVoters, sortArrow) => ({ col: { name, caption} }) => {
    return (
      <th>
        <button type="button" onClick={() => sortVoters(name)}>
          {caption} {sortArrow(name)}
        </button>
      </th>
    );
};

export const VoterList = ({ 
    voters, editVoterId, votersSort: { col, dir },
    onEditVoter: editVoter, onDeleteVoter: deleteVoter,
    onSaveVoter: saveVoter, onCancelVoter: cancelVoter,
    onSortVoters: sortVoters,
 }) => {

    const sortArrow = sortArrowWrapper(col, dir);
    sortArrow('id');
    const SortHeaderCol = sortHeaderColWrapper(sortVoters, sortArrowWrapper(col, dir));

=======
export const VoterList = ({ 
    voters, editVoterId, 
    onEditVoter: editVoter, onDeleteVoter: deleteVoter,
    onSaveVoter: saveVoter, onCancelVoter: cancelVoter,
 }) => {

>>>>>>> c97a9cd (Initialized voter system for workflow 1)
    return (
      <>
        <header>
          <h1>Registered voters list</h1>
        </header>
        <table>
            <thead>
                <tr>
<<<<<<< HEAD
                    {dataCols.map(dataCol => <SortHeaderCol key={dataCol.id} col={dataCol} />)}
                    <th>Actions</th>
=======
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Birthdate</th>
                    <th>Email</th>
                    <th>Phone</th>
>>>>>>> c97a9cd (Initialized voter system for workflow 1)
                </tr>
            </thead>
            <tbody>
                {voters.map((voter) => 
                    voter.id === editVoterId
                    ? <VoterEditRow key={voter.id} voter={voter} onSaveVoter={saveVoter} onCancelVoter={cancelVoter}/>
                    : <VoterViewRow key={voter.id} voter={voter} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />)}
            </tbody>
        </table>
      </>
    );
  };