
import DispalyUserRole from './DisplayUserRole.jsx';
import Message from './Message.jsx';
import './App.css';

function App(){
    var role=prompt("Enter the Role");

    return(
        <>
        <DispalyUserRole  role={role}> </DispalyUserRole>
        <Message></Message>

        </>
    )
}

export default App;
