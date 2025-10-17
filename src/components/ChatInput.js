
const ChatInput = ({newMessage, setNewMessage}) => {
  const [inputValue, setInputValue] = React.useState('');

  function saveInputValue(event) {
    setInputValue(event.target.value);
  }

  function sendeMessage(){
    setNewMessage([
      ...newMessage, {
        message: inputValue,
        sender: 'user', 
        id:crypto.randomUUID()
      }
    ]);

  }


  return (
    <div>
      <input
        placeholder='Send a message!'
        onChange={saveInputValue}
      />
      <button onClick={sendeMessage}>Send</button>
    </div>
  );
}
