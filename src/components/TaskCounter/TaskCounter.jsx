import { useSelector } from 'react-redux'
import s from './TaskCounter.module.css'
import { countTasks } from '../../redux/selectors'
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

export default function TaskCounter() {
    const count = useSelector(countTasks)
    
    return (
        <div>
            <motion.h2 variants={textAnimation} custom={1}>Tasks</motion.h2>
            <div className={s.textWrapper}> 
                <motion.p className={s.text} variants={textAnimation} custom={2}>Active: {count.active}</motion.p>
                <motion.p className={s.text} variants={textAnimation} custom={2}>Completed: {count.completed}</motion.p>
            </div>
        </div>
    )
}