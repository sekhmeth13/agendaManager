export interface Buyer {
    name: string
    company: string
}

export interface Vendor {
    name: string
}

export interface Appointment {
    title: string
    start: string
    end: string
    buyer: Buyer
    vendor: Vendor
}
