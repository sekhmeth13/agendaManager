import { Appointment } from './models/Appointment'
import { timeStringToMinutes } from '../../../../lib/time'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
interface AppointmentProps {
    appointment: Appointment
    onDelete?: (appointment: Appointment) => void
    onClick?: () => void
    setSelected?: (appointment: Appointment) => void
}

export function Appointment(props: AppointmentProps) {
    const { title, start, end } = props.appointment
    const startTime = timeStringToMinutes(start)
    const endTime = timeStringToMinutes(end)
    const top = (startTime / 60) * 39 // 40px per hour
    const height = ((endTime - startTime) / 60) * 39 // 40px per hour

    function handleDelete() {
        if (props.onDelete) {
            props.onDelete(props.appointment)
        }
    }
    function handleClick() {
        if (props.setSelected) {
            props?.setSelected(props.appointment)
        }
        if (props?.onClick) {
            props.onClick()
        }
    }

    return (
        <div
            onClick={handleClick}
            className="appointment"
            style={{ top: `${top}px`, height: `${height}px`, width: '80%' }}>
            <span>{title}</span>
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={handleDelete} />
        </div>
    )
}
