import { render, screen } from '@testing-library/react'
import { CalendarDayView } from './CalendarDayView'
import { fixtureAppointments } from '../../../configuration'
import { generateTimeSlots } from '../../lib/time'

describe('CalendarDayView component', () => {
    it('renders the header with the correct date', () => {
        render(<CalendarDayView />)

        const headerElement = screen.getByRole('heading', { level: 2 })
        expect(headerElement).toBeInTheDocument()
        expect(headerElement).toHaveTextContent('Monday, May 2, 2023')
    })

    it('renders the time slots with appointments', () => {
        const appointments = fixtureAppointments
        const timeSlots = generateTimeSlots()
        render(<CalendarDayView />)

        const timeSlotElements = screen.getAllByRole('time-slot')
        expect(timeSlotElements).toHaveLength(13) // Assuming 13 time slots in the configuration

        timeSlotElements.forEach((timeSlotElement, index) => {
            const timeSlotText = screen.getByText(timeSlots[index])
            expect(timeSlotText).toBeInTheDocument()

            const appointmentElements = timeSlotElement.querySelectorAll('.appointment')
            const expectedAppointments = appointments.filter((a) => a.start === timeSlots[index])

            expect(appointmentElements).toHaveLength(expectedAppointments.length)
        })
    })
})
