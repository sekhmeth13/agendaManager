import { Appointment } from './src/components/CalendarDayView/components/Appointment/models/Appointment'
export const apiUrl = process.env.API_URL || 'http://localhost:3001'

export const vendorCollection = ['vendor1', 'vendor2', 'vendor1']
export const buyersCollection = [
    { name: 'buyer1', compagny: 'company1' },
    { name: 'buyer2', compagny: 'company1' },
    { name: 'buyer3', compagny: 'company3' }
]

export const fixtureAppointments: Appointment[] = [
    { title: 'Meeting with John', start: '9:00 AM', end: '10:00 AM' },
    { title: 'Lunch with Jane', start: '12:00 PM', end: '2:00 PM' },
    { title: 'Call with Mike', start: '1:30 PM', end: '2:00 PM' },
    { title: 'Meeting with Sarah', start: '4:00 PM', end: '5:00 PM' }
    // Add more appointments here...
]

export const date = 'Monday, May 2, 2023'
