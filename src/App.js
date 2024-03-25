
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={require('./logo_Stud_Model.jpg')} />
      <br />
      <div><a href='https://vk.com/stud_model'>Stud. Model.</a></div>
        <table><thead><tr>
          <td>
            <div className="VVLS">Введите логин от сервера</div>
            <Input></Input>
          </td>
          <td>
            <div className="VVLA">
            Введите логин от Avito</div>
            <Input></Input>
          </td>
          <td>
            <div className="VVLV">
            Введите логин от Vk</div>
            <Input></Input>
          </td>
          </tr></thead>
          <tbody>
          <tr>
          <td>
            <div className="VVPS">
            Введите пароль от сервера
            </div>
            <Input></Input>
          </td>
          <td>
            <div className="VVPA">
            Введите пароль от Avito</div>
            <Input></Input>
          </td>
          <td>
            <div className="VVPV">
            Введите пароль от Vk</div>
            <Input></Input>
          </td>
          </tr></tbody></table>
          <button className="Buttom" href=''>Дальше</button>
      </header>
    </div>
  );
}


function Input () {
  return (
    <div className="Input">
      <input></input>
    </div>
  );
}

export default App;
