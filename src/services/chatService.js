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

  uploadImage: async (data) => {
    const headers = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    try {
      const { data: data_1 } = await API.post('/chats/upload-image', data, headers);
      return data_1.url;
    } catch (err) {
      throw err;
    }
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

  searchUsers: (term) => {
    return API.get('/users/search-users', {
      params: {
        term
      }
    })
      .then(({ data }) => {
        return data
      })
      .catch(err => {
        throw err
      })
  },

  createChat: (partnerId) => {
    return API.post('/chats/create', { partnerId })
      .then(({ data }) => {
        return data
      })
      .catch(err => {
        throw err
      })
  },

  addFriendToGroupChat: (userId, chatId) => {
    return API.post('/chats/add-user-to-group', { userId, chatId })
      .then(({ data }) => {
        return data
      })
      .catch(err => {
        throw err
      })
  },
}

export default chatService;