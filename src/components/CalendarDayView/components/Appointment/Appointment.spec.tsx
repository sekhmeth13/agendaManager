import { render, screen } from '@testing-library/react'
import { Appointment } from './Appointment'
import { Appointment as AppointmentModel } from './models/Appointment'
import { timeStringToMinutes } from '../../../../lib/time'

describe('Appointment component', () => {
    it('renders the appointment with correct position and size', () => {
        const appointment: AppointmentModel = {
            title: 'Meeting with John',
            start: '9:00 AM',
            end: '10:00 AM'
        }
        const startTime = timeStringToMinutes(appointment.start)
        const endTime = timeStringToMinutes(appointment.end)
        const expectedTop = (startTime / 60) * 50 // 40px per hour
        const expectedHeight = ((endTime - startTime) / 60) * 50 // 40px per hour

        render(<Appointment appointment={appointment} />)

        const appointmentElement = screen.getByRole('button')
        expect(appointmentElement).toHaveStyle(`top: ${expectedTop}px`)
        expect(appointmentElement).toHaveStyle(`height: ${expectedHeight}px`)

        const titleElement = screen.getByText(appointment.title)
        expect(titleElement).toBeInTheDocument()
    })
})
