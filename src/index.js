import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar'
import Story from './Story'
import Posts from './Posts'
import Sidebar from './Sidebar'

export default function App() {
    return (
        <React.Fragment>
        <Navbar />
        <div className="corpo">
        <div className="esquerda">
        <Story />
        <Posts />
        </div>
        <Sidebar />
        </div>
        </React.Fragment>

    );
  }

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
