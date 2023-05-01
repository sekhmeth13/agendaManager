import { createRoot } from 'react-dom/client'
import { CalendarDayView } from './components/CalendarDayView/CalendarDayView'

const rootElement = document.getElementById('calendar-manager')
if (rootElement) {
    createRoot(rootElement).render(<CalendarDayView />)
}
