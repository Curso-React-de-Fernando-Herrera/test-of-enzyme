import Header from 'components/Header'
import Counter from 'components/Counter'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title='Bienvenido!'
        subtitle='Al testing con Enzyme'
      />
      <Counter />
    </div>
  );
}

export default App;
