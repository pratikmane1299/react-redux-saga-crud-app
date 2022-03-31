import { GitHub } from 'react-feather';

import AppRoutes from './routes';


function App() {
  return (
    <div className="w-full bg-slate-50 h-screen flex flex-col items-center">
      <header className="px-4 lg:px-20 py-3 w-full h-18 flex justify-between items-center bg-slate-100 shadow-sm">
        <a
          className="flex justify-between items-center"
          href="https://redux-saga.js.org/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Redux Saga"
            src="https://redux-saga.js.org/img/Redux-Saga-Logo.png"
            className="w-13 h-8 lg:w-15 lg:h-10"
          />
          <span className="ml-4 text-lg lg:text-2xl text-gray-800 font-normal">
            Redux Saga Crud App
          </span>
        </a>
        <div>
          <a
            className="text-md lg:text-lg flex items-center text-gray-800"
            href="https://github.com/pratikmane1299/react-redux-saga-crud-app/"
            target='_blank' rel="nofollow noopener noreferrer"
          >
            <GitHub />
            <span className='ml-1 hidden lg:block'>GitHub</span>
          </a>
        </div>
      </header>
      <main className="px-4 lg:px-20 py-4 w-full h-full flex flex-col">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
