import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header component', () => {
    it('renders the header with the correct date', () => {
        const date = 'Monday, May 2, 2023'
        render(<Header date={date} />)

        const headerElement = screen.getByRole('heading', { level: 2 })
        expect(headerElement).toBeInTheDocument()
        expect(headerElement).toHaveTextContent(date)
    })
})
