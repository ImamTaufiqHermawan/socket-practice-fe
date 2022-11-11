import chatService from '../../services/chatService';
export const FETCH_CHATS = 'FETCH_CHATS';
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';

export const fetchChats = () => async function (dispatch) {
  try {
    const response = await chatService.fetchChats();
    console.log(response)
    response.data.forEach(chat => {
      chat.Users.forEach(user => {
        user.status = 'offline'
      })
      chat.Messages.reverse();
    })

    dispatch({ type: FETCH_CHATS, payload: response.data });
    return response.data;

  } catch (error) {
    throw error
  }
}

export const setCurrentChat = (chat) => dispatch => {
  dispatch({ type: SET_CURRENT_CHAT, payload: chat })
}
