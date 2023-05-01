import { createRoot } from 'react-dom/client'
import { screen } from '@testing-library/react'
import { CalendarDayView } from './components/CalendarDayView/CalendarDayView'
import { act } from 'react-dom/test-utils'

describe('Loads CalendarDayView and the toher components', () => {
    it('renders the calendar day view', () => {
        const rootElement = document.createElement('div')
        rootElement.id = 'calendar-manager'
        document.body.appendChild(rootElement)
        act(() => createRoot(rootElement).render(<CalendarDayView />))
        const headerElement = screen.getByRole('heading', { level: 2 })
        expect(headerElement).toHaveTextContent('Monday, May 2, 2023')

        const timeSlotElements = screen.getAllByTestId('time-slot')
        expect(timeSlotElements).toHaveLength(13)

        const appointmentElements = screen.getAllByRole('button')
        expect(appointmentElements).toHaveLength(3)
    })
})
