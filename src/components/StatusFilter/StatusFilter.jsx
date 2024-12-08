import { useDispatch } from 'react-redux'
import s from './StatusFilter.module.css'
import { changeStatusFilter } from '../../redux/filtersSlice'

export default function StatusFilter() {
    const dispatch = useDispatch()
    
    return (
        <div>
            <h2>Filter by status</h2>
            <div className={s.buttonWrapper}>
                <button onClick={()=> dispatch(changeStatusFilter('all'))}>All</button>
                <button onClick={()=> dispatch(changeStatusFilter('active'))}>Active</button>
                <button onClick={()=> dispatch(changeStatusFilter('completed'))}>Completed</button>
            </div>
        </div>
    )
}