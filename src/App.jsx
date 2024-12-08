import { useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import StatusFilter from './components/StatusFilter/StatusFilter'
import TaskCounter from './components/TaskCounter/TaskCounter'
import { useDispatch } from 'react-redux'
import { fetchTasks } from './redux/operations'
import TaskList from './components/TaskList/TaskList'
import AddForm from './components/AddForm/AddForm'

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
dispatch(fetchTasks())
    }, [dispatch])
    return (
        <div className='mainWrapper'>
            <div className='firstWrapper'>
                <TaskCounter />
                <StatusFilter/>
            </div>
            <SearchBar />
            <AddForm/>
            <TaskList/>
     </div>
 )
}


