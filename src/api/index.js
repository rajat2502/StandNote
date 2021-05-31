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
    return res.data;
  } catch (err) {
    return { err: 'Something went wrong!' };
  }
};

export const getNote = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/notes/${id}/`);
    return res.data;
  } catch (err) {
    return { err: 'Something went wrong!' };
  }
};

export const updateNote = async (id, obj) => {
  try {
    const res = await axios.put(`${baseUrl}/notes/${id}/`, obj);
    console.log(res.data);
    return res.data;
  } catch (err) {
    return { err: 'Something went wrong!' };
  }
};

export const deleteNote = async (id) => {
  try {
    await axios.delete(`${baseUrl}/notes/${id}`);
  } catch (err) {
    return { err: 'Something went wrong!' };
  }
};

export const getNotionCredentials = async (email) => {
  try {
    const res = await axios.get(`${baseUrl}/notion/email/${email}/`);
    return res.data[0];
  } catch {
    return { err: 'Something went wrong!' };
  }
};

export const submitNotionCredentials = async (obj) => {
  try {
    const res = await axios.post(`${baseUrl}/notion/`, obj);
    return res.data;
  } catch {
    return { err: 'Something went wrong!' };
  }
};

export const pushMkdToNotion = async (obj) => {
  try {
    const res = await axios.post(`${baseUrl}/notion/note/`, obj);
    return res.data;
  } catch (err) {
    console.log(err.response);
    return { err: 'Something went wrong!' };
  }
};

export const getSentiments = async (input) => {
  const { result } = await window.Algorithmia.client(
    process.env.REACT_APP_ALGORITHMIA_API
  )
    .algo('algobox/SentimentAnalysis/0.1.0?timeout=300')
    .pipe(input);

  return result;
};
