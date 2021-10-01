import { VERIFY_VOTER_INFORMATION, ADD_VOTER, EDIT_VOTER, REMOVE_VOTER, CANCEL_VOTER, REPLACE_VOTER, SORT_VOTERS } from "../actions/voterActions";

const dummyVoters= [
    {
        id: 1,
        firstName: "Bob",
        lastName: "Petit",
        address: "123 Random Street",
        city: "San Francisco",
        birthdate: "01-01-1990",
        email: "bobby_p@gmail.com",
        phone: "1234567890",
    },
    {
        id: 2,
        firstName: "Pob",
        lastName: "Betit",
        address: "321 Street Random",
        city: "Francisco San",
        birthdate: "10-10-2000",
        email: "pobby_b@gmail.com",
        phone: "0987654321",
    },   
];

export const voterEditReducer = ( voterId = -1, action) => {
    switch(action.type){
        case ADD_VOTER:
            return -1;
        case EDIT_VOTER:
            return action.voterId;
        case CANCEL_VOTER:
            return -1;
        case REMOVE_VOTER:
            return -1;    
        case REPLACE_VOTER:
            return -1;    
        default:
            return voterId;    
    }
}

export const votersReducer = ( voters = dummyVoters, action ) => {
    switch(action.type) {
        case ADD_VOTER:
            voters.map(v => console.log(typeof(v.id)));
            let temp = {...action.voter, id: Math.max(...voters.map(v => v.id), 0) + 1}
            console.log(temp);
            return [
                ...voters,
                temp
            ];
        case REMOVE_VOTER:
            let votersCopy = [...voters];
            let index = votersCopy.findIndex((v) => v.id === action.voterId)
            votersCopy.splice(index, 1);
            return votersCopy;
        case REPLACE_VOTER:
            let newVoters = [ ...voters ];
            let voterIndex = newVoters.findIndex(v => v.id === action.voter.id)
            newVoters[voterIndex] = action.voter;
            return newVoters;
        default:
            return voters;    
    }
};

export const votersSortReducer = (votersSort = { col: 'id', dir: 'asc' }, action) => {
    if (action.type === SORT_VOTERS) {
      if (action.col === votersSort.col) {
        return { col: votersSort.col, dir: votersSort.dir === 'asc' ? 'desc' : 'asc' };
      } else {
        return { col: action.col, dir: 'asc' };
      };
    }
  
    return votersSort;
  };