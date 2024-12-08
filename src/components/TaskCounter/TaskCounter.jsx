import { useSelector } from 'react-redux'
import s from './TaskCounter.module.css'
import { countTasks } from '../../redux/selectors'

export default function TaskCounter() {
    const count = useSelector(countTasks)
    return (
        <div>
            <h2>Tasks</h2>
            <div className={s.textWrapper}> 
                <p className={s.text}>Active: {count.active}</p>
                <p className={s.text}>Completed: {count.completed}</p>
                </div>
        </div>
    )
}