import { useDispatch} from 'react-redux'
import s from './SearchBar.module.css'
import { LiaSearchSolid } from "react-icons/lia";
import { changeFilter } from '../../redux/tasksSlice'


export default function SearchBar() {
    
    const dispatch = useDispatch()
    const handleChangeFilter = (e) => {
        dispatch(changeFilter(e.target.value))
    }
    return (
        <div className={s.inputWrapper}> 
            <button type='submit' className={s.icon}>
                     <LiaSearchSolid size={28}/>
                    </button>
            <input type='text' placeholder='Search...' className={s.input} onChange={handleChangeFilter}></input>
        </div>
    )
}