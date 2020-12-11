import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const googleLogin = async (access_token) => {
  try {
    const res = await axios.post(`${baseUrl}/rest-auth/google/`, {
      access_token,
    });
    return { key: res };
  } catch (err) {
    return { err: 'Something went wrong!' };
  }
};

export const login = async (user) => {
  try {
    const res = await axios.post(`${baseUrl}/rest-auth/login/`, user);
    return { key: res.data.key };
  } catch (err) {
    return { err: 'Something went wrong!' };
  }
};

export const register = async (user) => {
  try {
    const res = await axios.post(
      `${baseUrl}/rest-auth/registration/
    `,
      user
    );
    return { key: res.data.key };
  } catch (err) {
    return { err: 'Something went wrong!' };
  }
};

export const getAllNotes = async (email) => {
  try {
    const res = await axios.get(`${baseUrl}/notes/${email}/`);

    console.log(res);
    return res.data;
  } catch (err) {
    return { err: 'Something went wrong!' };
  }
};
