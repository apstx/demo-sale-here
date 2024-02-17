import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Welcome from './pages/welcome/Welcome'
import CreateRoom from './pages/createRoom/CreateRoom'
import ChatRoom from './pages/chatRoom/ChatRoom'
import JoinRoom from './pages/joinRoom/JoinRoom'

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/welcome',
            element: <Welcome />
        },
        {
            path: '/create-room',
            element: <CreateRoom />
        },
        {
            path: '/join-room',
            element: <JoinRoom />
        },
        {
            path: '/chat-room',
            element: <ChatRoom />
        }
    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default App
