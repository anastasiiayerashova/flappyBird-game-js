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
    
    const btnAnimation = {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.5
        }
    }

    return (
        <div>
            <motion.h2 variants={textAnimation} custom={1}>Filter by status</motion.h2>
            <div className={s.buttonWrapper}>
                <motion.button onClick={() => dispatch(changeStatusFilter('all'))}
                variants={btnAnimation} initial='initial' animate='animate' transition='transition'
                >All</motion.button>
                <motion.button onClick={()=> dispatch(changeStatusFilter('active'))} variants={btnAnimation} initial='initial' animate='animate' transition='transition'>Active</motion.button>
                <motion.button onClick={()=> dispatch(changeStatusFilter('completed'))} variants={btnAnimation} initial='initial' animate='animate' transition='transition' >Completed</motion.button>
            </div>
        </div>
    )
}