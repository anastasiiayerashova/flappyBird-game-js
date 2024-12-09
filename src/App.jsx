import { useEffect} from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import StatusFilter from './components/StatusFilter/StatusFilter'
import TaskCounter from './components/TaskCounter/TaskCounter'
import { useDispatch } from 'react-redux'
import { fetchTasks } from './redux/operations'
import TaskList from './components/TaskList/TaskList'
import AddForm from './components/AddForm/AddForm'
import { motion} from 'framer-motion'

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    })
}

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchTasks())
    }, [dispatch])

    return (
        <motion.div initial='hidden' whileInView='visible' className='mainWrapper'>
          <motion.h1 custom={1} variants={textAnimation} className='title'>Welcome to your personal Task Counter!</motion.h1>
          <div className='firstWrapper'>
            <TaskCounter/>
            <StatusFilter/>
          </div>
          <SearchBar />
          <AddForm/>
          <TaskList/>
        </motion.div>    
 )
}