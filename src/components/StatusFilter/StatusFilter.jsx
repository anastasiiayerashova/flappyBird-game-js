import { useDispatch } from 'react-redux'
import s from './StatusFilter.module.css'
import { changeStatusFilter } from '../../redux/filtersSlice'
import { motion } from 'framer-motion'

export default function StatusFilter() {
    const dispatch = useDispatch()

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

    return (
        <div>
            <motion.h2 variants={textAnimation} custom={1}>Filter by status</motion.h2>
            <div className={s.buttonWrapper}>
                <button onClick={()=> dispatch(changeStatusFilter('all'))}>All</button>
                <button onClick={()=> dispatch(changeStatusFilter('active'))}>Active</button>
                <button onClick={()=> dispatch(changeStatusFilter('completed'))}>Completed</button>
            </div>
        </div>
    )
}