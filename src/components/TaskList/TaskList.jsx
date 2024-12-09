import { useSelector } from 'react-redux'
import s from './TaskList.module.css'
import { selectVisibilityFilter } from '../../redux/selectors'
import { motion } from 'framer-motion'
import { MTask } from '../Task/Task';

const featureAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }, 
  }),
}

export default function TaskList() {
    const visibleItems = useSelector(selectVisibilityFilter)

    return (
        <motion.ul className={s.list}
            initial="hidden"
            whileInView="visible"
            animate='visible'
            >
            {visibleItems.map((item, index) => (
                <MTask key={item.id} {...item} custom={index + 1}
                variants={featureAnimation}/>
            ))}
        </motion.ul>
    )
}