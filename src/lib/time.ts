export function timeStringToMinutes(timeString: string): number {
    const [hours, minutes, ampm] = timeString.split(/ |:/g)
    let totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10)
    if (ampm.toLowerCase() === 'pm' && hours !== '12') {
        totalMinutes += 12 * 60 // Convert to 24-hour format
    }
    return totalMinutes
}

export function generateTimeSlots() {
    const openingHour = 9
    const closingHour = 18
    const intervalMinutes = 15

    const timeSlots = []

    for (let hour = openingHour; hour < closingHour; hour++) {
        for (let minute = 0; minute < 60; minute += intervalMinutes) {
            const period = hour >= 12 ? 'PM' : 'AM'
            const hour12 = hour > 12 ? hour - 12 : hour
            const minuteStr = String(minute).padStart(2, '0')
            const timeSlot = `${hour12}:${minuteStr} ${period}`
            timeSlots.push(timeSlot)
        }
    }

    return timeSlots
}
