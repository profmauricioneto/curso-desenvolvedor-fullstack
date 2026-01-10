import React from "react";
// import GetData from './components/GetData';
// import FormLoginExample from './components/FormLoginExample';
import Cadastro from "./exercicio-cadastro/Cadastro";
import Login from "./exercicio-cadastro/Login";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NavBar from './components/NavBar';
// import HelloWorld from './components/HelloWorld';
// import Card from './components/Card';
// import UserList from './components/UserList';

function App() {
    // const [contador, setContador] = useState(0);
    // const [name, setName] = useState("mauricio");
    // const [tarefas, setTarefas] = useState([
    //   { id: 1, title: 'limpar a casa' },
    //   { id: 2, title: 'estudar' },
    // ]);

    // const users = [
    //   { name: 'mauricio', age: 35 },
    //   { name: 'fulano', age: 12 },
    //   { name: 'cicrano', age: 65 },
    //   { name: 'beltrano', age: 86 },
    //   { name: 'dollynho', age: 15 }
    // ]

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
            {/* <GetData /> */}
            {/* <BrowserRouter> */}
            {/* <NavBar /> */}
            {/* <button onClick={() => setContador(contador + 1)} className='border rounded-lg'>Clique</button>
        <p>{contador}</p>
        <p>{tarefas.map((t, index) => (
          <Card key={index}>{t.id} - {t.title}</Card>
        ))}</p> */}
            {/* <Routes>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
            {/* <UserList users={users} /> */}
            {/* <h1>Testando</h1>
      <HelloWorld nome="Maurício Neto" idade={35} />

      <div style={{
        display: 'flex',
        gap: '2px',
      }}>
        <Card>
          <img src="../public/pikachu-card.png" alt="carta pikachu"
            style={{
              height: 'auto',
              width: '200px',
            }} />
          <h3>Card Name</h3>
          <p>descricao</p>
        </Card>

        <Card>
          <img src="../public/pikachu-card.png" alt="carta pikachu"
            style={{
              height: 'auto',
              width: '200px',
            }} />
          <h3>Card Name</h3>
          <p>descricao</p>
        </Card>

        <Card>
          <img src="../public/pikachu-card.png" alt="carta pikachu"
            style={{
              height: 'auto',
              width: '200px',
            }} />
          <h3>Card Name</h3>
          <p>descricao</p>
        </Card>

        <Card>
          <img src="../public/pikachu-card.png" alt="carta pikachu"
            style={{
              height: 'auto',
              width: '200px',
            }} />
          <h3>Card Name</h3>
          <p>descricao</p>
        </Card>
      </div> */}
        </>
    );
}

export default App;
