import axios from 'axios';

export const googleLogin = async (access_token) => {
  const res = await axios.post('', { access_token });
};
