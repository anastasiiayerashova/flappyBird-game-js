import { useDispatch} from 'react-redux'
import s from './SearchBar.module.css'
import { LiaSearchSolid } from "react-icons/lia";
import { changeFilter } from '../../redux/tasksSlice'
import { motion } from 'framer-motion';

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

export default function SearchBar() {
    
    const dispatch = useDispatch()
    const handleChangeFilter = (e) => {
        dispatch(changeFilter(e.target.value))
    }
    return (
        <div className={s.inputWrapper}> 
            <motion.button type='submit' className={s.icon} custom={2} variants={textAnimation}>
                     <LiaSearchSolid size={28}/>
                    </motion.button>
            <motion.input type='text' placeholder='Search...' className={s.input} onChange={handleChangeFilter} custom={2} variants={textAnimation}></motion.input>
        </div>
    )
}