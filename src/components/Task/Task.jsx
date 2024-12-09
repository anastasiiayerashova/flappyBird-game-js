import { useDispatch } from 'react-redux';
import s from './Task.module.css'
import { MdClose } from 'react-icons/md';
import { deleteTask, editTask, toggleCheckbox } from '../../redux/operations';
import { GrEdit } from "react-icons/gr";
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Task = forwardRef(({ completed, text, id }, ref) => {
       
    const dispatch = useDispatch()

    const handleDeleteTask = () => {
        dispatch(deleteTask(id))
    }

    const handleToggleCheckbox = () => {
        dispatch(toggleCheckbox({ id, text, completed: !completed }))
    }

    const handleEditText = () => {
        const newText = {
            id,
            text: prompt('Enter new task...') ?? text
        }
        dispatch(editTask(newText))
    }

    return (
        <li className={s.wrapper} ref={ref}>
            <input
                type="checkbox"
                className={s.checkbox}
                checked={completed}
                onChange={handleToggleCheckbox} />
            <p className={s.text}>{text}</p>
            <button className={s.btn} onClick={handleDeleteTask}>
                <MdClose size={24} />
            </button>
            <button className={`${s.btn} ${s.pencil}`} onClick={handleEditText}>
                <GrEdit size={24} color='#747bff' />
            </button>
        </li>
    )
})
Task.displayName='Task'
export const MTask = motion(Task)