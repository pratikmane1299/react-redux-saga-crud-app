import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GitHub } from "react-feather";

import { setTheme } from "./actions/theme.actions";

import AppRoutes from "./routes";

function App({ theme, setTheme }) {
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          setTheme("dark");
          window.document.documentElement.classList.add('dark');
        } else {
          setTheme("light");
          window.document.documentElement.classList.remove('dark');
        }
      });

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      window.document.documentElement.classList.add('dark');
      setTheme("dark");
    } else {
      const savedTheme = window.localStorage.getItem("APP_THEME");
      if (savedTheme) {
        setTheme(savedTheme);
        if (savedTheme === 'dark') {
          window.document.documentElement.classList.add('dark');
        }
      }
    }
  }, [setTheme]);

  useEffect(() => {
    localStorage.setItem("APP_THEME", theme);
  }, [theme]);

  function toggleTheme() {
    if (theme === 'dark') {
      window.document.documentElement.classList.remove('dark');
      setTheme('light');
    } else {
      window.document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }

  return (
    <div className="w-full bg-slate-50 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <header className="px-4 lg:px-20 py-3 w-full h-18 flex justify-between items-center bg-slate-100 dark:bg-blue-900 shadow-sm">
        <a
          className="flex justify-between items-center"
          href="/"
        >
          <img
            alt="Redux Saga"
            src="https://redux-saga.js.org/img/Redux-Saga-Logo.png"
            className="w-13 h-8 lg:w-15 lg:h-10"
          />
          <span className="ml-4 text-lg lg:text-2xl text-gray-800 dark:text-gray-100 font-normal">
            Redux Saga Crud App
          </span>
        </a>
        <div className="w-40 flex items-center justify-around">
          <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={toggleTheme}
          >
            <svg
              id="theme-toggle-dark-icon"
              className={`w-5 h-5 lg:w-6 lg:h-6 ${theme === 'dark' ? 'hidden' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className={`w-5 h-5 lg:w-6 lg:h-6 ${theme === 'light' ? 'hidden' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <a
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            href="https://github.com/pratikmane1299/react-redux-saga-crud-app/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <GitHub className="w-5 h-5 lg:w-6 lg:h-6" />
          </a>
        </div>
      </header>
      <main className="px-4 lg:px-20 py-4 w-full h-full flex flex-col">
        <AppRoutes />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = {
  setTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
