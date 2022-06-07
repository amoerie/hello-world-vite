import logo from './logo.svg'
import './App.css'
import { observer } from 'mobx-react-lite';
import { SubComponent } from './SubComponent';
import { CountStore } from './CountStore';

type AppProps = {
  message: string;
}

const countStore = new CountStore();

const App = observer((props: AppProps) => {
  const { message } = props;
  const { count } = countStore;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <p>
          <button type="button" onClick={() => countStore.increment()}>
            count is: {count}
          </button>
        </p>
        <SubComponent count={count} />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates omg.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
});

export default App;
