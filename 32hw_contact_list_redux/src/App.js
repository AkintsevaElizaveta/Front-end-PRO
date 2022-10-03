import style from '../src/Contacts/Contacts.module.css'
import Contacts from "./Contacts/Contacts";

function App() {
  return(
      <div className={style.wrapper}>
        <Contacts />
      </div>
  );
}

export default App;
