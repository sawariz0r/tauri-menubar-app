import React from 'react'
import './style.css'

function App() {
    return (
        <div className="container">
            <h1>Tauri Menubar app</h1>

            <div className="row">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo vite" alt="Vite logo" />
                </a>
                <a href="https://tauri.app" target="_blank">
                    <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src="/react.svg" className="logo react" alt="React logo" />
                </a>
            </div>

            <p>A minimal example of a menubar application built with Tauri, Vite and React. This application demonstrates the use of basic functionalities and System Tray API.</p>
        </div>
    )
}

export default App
