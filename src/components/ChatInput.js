
const ChatInput = ({newMessage, setNewMessage}) => {
  const [inputValue, setInputValue] = React.useState('');

  function saveInputValue(event) {
    setInputValue(event.target.value);
  }

  function sendeMessage(){

    if(inputValue === ''){
      alert('Esqueceu de enviar a mensagem!');
       return;
    }

   


    setNewMessage([
      ...newMessage, {
        message: inputValue,
        sender: 'user', 
        id:crypto.randomUUID()
      }, {
        message: Chatbot.getResponse(inputValue),  
        sender: 'robot', 
        id: crypto.randomUUID()
      }

    ]);

    setInputValue('');
}


  return (
    <div>
      <input className="outline px-40 placeholder-indigo-55 box-sizing " 
      
        placeholder='Envie sua mensagens!'
        onChange={saveInputValue}
        value={inputValue}
      />
      <button className="px-10 border-spacing-3"
       onClick={sendeMessage}>Enviar</button>
      
    </div>
  );
}
