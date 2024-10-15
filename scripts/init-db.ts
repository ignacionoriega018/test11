import axios from 'axios';

const initDb = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/create-test-users');
    console.log(response.data.message);
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

initDb();