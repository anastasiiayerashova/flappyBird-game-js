import { useDispatch } from 'react-redux'
import s from './AddForm.module.css'
import { Formik, Form, Field } from 'formik'
import { addTask } from '../../redux/operations'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'

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

export default function AddForm() {
    const initialValues = {
        task: '',
    }
    const dispatch = useDispatch()
    const handleAddTask = (values, actions) => {
        const newTask = {
            text: values.task,
            completed: false,
            id: nanoid(),
        }
        dispatch(addTask(newTask))
        actions.resetForm()
    }
    return (
        <Formik initialValues={initialValues} onSubmit={handleAddTask}>
            <Form className={s.form}>
                <motion.input type='text' name='task' className={s.input} placeholder='Enter task text...' custom={2} variants={textAnimation}/>
                <motion.button type='submit' variants={btnAnimation} initial='initial' animate='animate' transition='transition'>Add task</motion.button>
            </Form>
    </Formik>
    )
}