import { VERIFY_VOTER_INFORMATION } from "../actions/voterActions";
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
    return voters;
};