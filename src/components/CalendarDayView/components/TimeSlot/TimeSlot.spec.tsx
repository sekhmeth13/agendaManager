import { render, screen } from '@testing-library/react'
import { Appointment as AppointmentType } from '../Appointment/models/Appointment'
import { TimeSlot } from './TimeSlot'

describe('TimeSlot component', () => {
    it('renders the time slot with appointments', () => {
        const time = '9:00 AM'
        const appointments: AppointmentType[] = [
            {
                title: 'Meeting with John',
                start: '9:00 AM',
                end: '10:00 AM',
                buyer: { company: 'company1', name: 'buyer1' },
                vendor: { name: 'vendor1' }
            },
            {
                title: 'Meeting with John',
                start: '9:00 AM',
                end: '10:00 AM',
                buyer: { company: 'company1', name: 'buyer1' },
                vendor: { name: 'vendor1' }
            }
        ]

        render(<TimeSlot index={1} time={time} appointments={appointments} />)

        const timeElement = screen.getByText(time)
        expect(timeElement).toBeInTheDocument()

        const appointmentElements = screen.getAllByRole('button')
        expect(appointmentElements).toHaveLength(appointments.length)

        appointments.forEach((appointment, index) => {
            const titleElement = screen.getByText(appointment.title)
            expect(titleElement).toBeInTheDocument()
            expect(appointmentElements[index]).toContainElement(titleElement)
        })
    })
})
