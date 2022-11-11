import API from './api';

const chatService = {
  fetchChats: async () => {
    try {
      const response = await API.get('./chats');
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export default chatService;