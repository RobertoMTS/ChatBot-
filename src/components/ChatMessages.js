const ChatMessages = ({newMessage}) => {

  function addNewMessage() {
    setNewMessage([
      ...newMessage,{
        message: 'Thanks',
        sender: 'user', 
        id:crypto.randomUUID()
      }
    ]);
  }



  const chatMessageComponent = newMessage.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
      />
    );
  });

  return (
    <>
      <button onClick={addNewMessage}>add New Message</button>
      {chatMessageComponent}
    </>
  );
}
