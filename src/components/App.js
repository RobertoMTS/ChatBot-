
const App = () => {
    const messages = [];

  const [newMessage, setNewMessage] = React.useState(messages);

  return (
    <>
      <ChatInput
        newMessage = {newMessage}
        setNewMessage = {setNewMessage}
      />
      <ChatMessages 
      newMessage = {newMessage}
      
      />
    </>
  );
} 
