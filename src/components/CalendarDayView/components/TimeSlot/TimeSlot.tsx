import { Appointment } from '../Appointment/Appointment'
import { Appointment as AppointmentType } from '../Appointment/models/Appointment'

interface TimeSlotProps {
    time: string
    onClick?: (time: string) => void
    onDelete?: (index: number) => void
    appointments: AppointmentType[]
    openModal?: () => void
    setSelected?: ((appointment: AppointmentType) => void) | undefined
    index: number
}

export function TimeSlot(props: TimeSlotProps) {
    const { time, appointments, onClick, index, onDelete, setSelected } = props

    const handleClick = () => {
        if (onClick) {
            return onClick(time)
        }
    }

    const handleDelete = () => {
        if (onDelete) {
            return onDelete(index)
        }
    }

    return (
        <div className="time-slot" onClick={handleClick}>
            <span data-testid="time-slot">{time}</span>
            {appointments.map((appointment, index) => (
                <Appointment
                    onClick={handleClick}
                    onDelete={handleDelete}
                    setSelected={setSelected}
                    key={index}
                    appointment={appointment}
                />
            ))}
        </div>
    )
}
