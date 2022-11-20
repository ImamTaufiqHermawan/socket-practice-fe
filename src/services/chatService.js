import API from './api';

const chatService = {
  fetchChats: async () => {
    try {
      const response = await API.get('/chats');
      return response;
    } catch (err) {
      throw err;
    }
  },

  uploadImage: (data) => {
    const headers = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    return API.post('/chats/upload-image', data, headers)
      .then(({ data }) => {
        return data.url
      })
      .catch(err => {
        throw err
      })
  },

  paginateMessages: async (id, page) => {
    try {
      const { data } = await API.get('/chats/messages', {
        params: {
          id, page
        }
      });
      return data;
    } catch (err) {
      throw err;
    }
  },
}

export default chatService;