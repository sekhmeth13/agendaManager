import React, { useState } from 'react'
import { Appointment } from '../../models/Appointment'
import { generateTimeSlots } from '../../../../../../lib/time'
import './AppointmentForm.css'
import { buyersCollection, vendorCollection } from '../../../../../../../configuration'

interface AppointmentFormProps {
    onSubmit: (appointment: Appointment) => void
    appointment?: Appointment
}

export function AppointmentForm(props: AppointmentFormProps) {
    const { onSubmit, appointment } = props

    const [title, setTitle] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [vendor, setVendor] = useState(null)
    const [buyer, setBuyer] = useState(null)

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (vendor && buyer && title && start && end) {
            onSubmit({ title, start, end, vendor, buyer })
        }
    }

    const timeOptionsStart = generateTimeSlots()
    const timeOptionsEnd = generateTimeSlots()

    return (
        <form className="AppointmentForm" onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Start:
                <select value={start} onChange={(e) => setStart(e.target.value)} required>
                    <option value="" disabled>
                        Select start time
                    </option>
                    {timeOptionsStart.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                End:
                <select value={end} onChange={(e) => setEnd(e.target.value)} required>
                    <option value="" disabled>
                        Select end time
                    </option>
                    {timeOptionsEnd.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">Add Appointment</button>
        </form>
    )
}
