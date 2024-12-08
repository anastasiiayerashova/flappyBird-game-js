import { useSelector } from 'react-redux'
import s from './TaskList.module.css'
import { selectVisibilityFilter, selectVisibleItems } from '../../redux/selectors'
import Task from '../Task/Task'

export default function TaskList() {
    // const visibleItems = useSelector(selectVisibleItems)
    const visibleItems = useSelector(selectVisibilityFilter)
    return (
        <ul className={s.list}>
            {visibleItems.map(item => (
                <Task key={item.id} {...item} />
            ))}
        </ul>
    )
}