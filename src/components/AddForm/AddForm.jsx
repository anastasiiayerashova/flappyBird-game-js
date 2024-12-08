import { useDispatch } from 'react-redux'
import s from './AddForm.module.css'
import { Formik, Form, Field } from 'formik'
import { addTask } from '../../redux/operations'
import { nanoid } from 'nanoid'

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
                <Field type='text' name='task' className={s.input} placeholder='Enter task text...'/>
                <button type='submit'>Add task</button>
            </Form>
    </Formik>
    )
}