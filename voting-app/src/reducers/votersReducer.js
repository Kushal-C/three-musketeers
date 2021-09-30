import { VERIFY_VOTER_INFORMATION, ADD_VOTER, EDIT_VOTER} from "../actions/voterActions";

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
    
]

export const votersReducer = ( voters = dummyVoters, action ) => {
    switch(action.type) {
        case ADD_VOTER:
            return [
                ...voters,
                {...action.value, id: Math.max(voters.map(v => v.id), 0) + 1}
            ]
        default:
            return voters;    
    }
};