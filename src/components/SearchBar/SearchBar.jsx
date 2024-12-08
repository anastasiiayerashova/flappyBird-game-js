import { useDispatch, useSelector} from 'react-redux'
import s from './SearchBar.module.css'

import { changeFilter } from '../../redux/tasksSlice'


export default function SearchBar() {
    
    const dispatch = useDispatch()
    const handleChangeFilter = (e) => {
        dispatch(changeFilter(e.target.value))
    }
    return (
        <div className={s.inputWrapper}> 
            <input type='text' placeholder='Search...' className={s.input} onChange={handleChangeFilter}></input>
        </div>
    )
}