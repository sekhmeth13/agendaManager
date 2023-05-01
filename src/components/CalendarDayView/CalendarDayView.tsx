import { Appointment } from './components/Appointment/models/Appointment'
import { TimeSlot } from './components/TimeSlot/TimeSlot'
import { Header } from './components/Header/Header'
import { fixtureAppointments, date } from '../../../configuration'
import { generateTimeSlots } from '../../lib/time'
import { useState } from 'react'
import { Modal } from './components/Appointment/components/Modal/Modal'
import { AppointmentForm } from './components/Appointment/components/AppointmentForm/AppointmentForm'
import './CalendarDayView.css'

export function CalendarDayView() {
    const initialAppointments: Appointment[] = fixtureAppointments

    const [appointments, setAppointments] = useState(initialAppointments)
    const appointmentsByStartTime = groupAppointmentsByStartTime(appointments)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedAppointment, setSelectedAppointment] = useState()

    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    function handleAddAppointment(appointment: Appointment) {
        console.log({ appointment })
        setAppointments([...appointments, appointment])
        closeModal()
    }

    function handleUpdateAppointment(appointment: Appointment) {
        console.log({ appointment })
        setAppointments([...appointments, appointment])
        closeModal()
    }

    function handleDeleteAppointment(index: number) {
        console.log(appointments)
        setAppointments(appointments.filter((_, i) => i !== index))
        console.log(appointments)
        closeModal()
    }

    return (
        <div className="calendar">
            <Header date={date} />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AppointmentForm
                    appointment={selectedAppointment}
                    onSubmit={handleAddAppointment}
                />
            </Modal>
            <div className="time-slots">
                {generateTimeSlots().map((timeSlot, index) => (
                    <TimeSlot
                        openModal={openModal}
                        onDelete={handleDeleteAppointment}
                        setSelected={selectedAppointment}
                        index={index}
                        key={index}
                        time={timeSlot}
                        appointments={appointmentsByStartTime[timeSlot] || []}
                    />
                ))}
            </div>
        </div>
    )

    function groupAppointmentsByStartTime(
        appointments: Appointment[]
    ): Record<string, Appointment[]> {
        const appointmentsByStartTime: Record<string, Appointment[]> = {}
        appointments.forEach((appointment) => {
            const startTime = appointment.start
            if (!appointmentsByStartTime[startTime]) {
                appointmentsByStartTime[startTime] = []
            }
            appointmentsByStartTime[startTime].push(appointment)
        })
        return appointmentsByStartTime
    }
}
