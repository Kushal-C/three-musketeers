import { render } from 'react-dom';
import { VoterCreation } from './components/VoterCreation';

const voterList = [
  {
    id: 1,
    firstName: "Alisha",
    lastName: "Smith",
    address: "1299 Sanchez St, San Francisco, CA 94114, United States",
    city: "San Francisco",
    birthdate: "09-02-1997",
    email: "alishasmith@gmail.com",
    phone: "368268999"
  },
  {
    id: 2,
    firstName: "Ryan",
    lastName: "Wilson",
    address: "820 E El Camino Real, Mountain View, CA 94040, United States",
    city: "Mountain View",
    birthdate: "12-22-1995",
    email: "ryanwilson@gmail.com",
    phone: "1839079355"
  },
  {
    id: 3,
    firstName: "Bobby",
    lastName: "Brown",
    address: "1900 S Central Ave, Los Angeles, CA 90011, United States",
    city: "Los Angeles",
    birthdate: "03-15-1998",
    email: "bb315@gmail.com",
    phone: "6340997863"
  },
];

render(<>
  <VoterCreation voters={voterList}/>
</>, document.querySelector('#root'));
