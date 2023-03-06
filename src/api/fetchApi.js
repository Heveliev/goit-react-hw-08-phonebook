import axios from 'axios';

axios.defaults.baseURL = 'https://640362d7302b5d671c4e0f9b.mockapi.io';

const getContacts = async () => {
      const allContacts = await axios('/contacts');
        return allContacts;
}


const add = async (name, phone) => {
  const addContact = axios.post('/contacts',  {name,phone} );
  return addContact
}


const deleteCon = async (id) => {
  const deleteContact = axios.delete(`/contacts/${id}`)
  return deleteContact
}

export {getContacts, add, deleteCon}