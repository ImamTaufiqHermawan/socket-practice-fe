import chatService from '../../services/chatService';
export const FETCH_CHATS = 'FETCH_CHATS';

export const fetchChats = () => async function (dispatch) {
  try {
    const response = await chatService.fetchChats();
    console.log(response)
    response.data.forEach(chat => {
      chat.Users.forEach(user => {
        user.status = 'offline'
      })
      chat.Message.reverse();
    })

    dispatch({ type: FETCH_CHATS, payload: response.data });
    return response.data;

  } catch (error) {
    throw error
  }
}
