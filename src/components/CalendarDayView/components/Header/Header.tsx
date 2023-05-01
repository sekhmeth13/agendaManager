interface HeaderProps {
    date: string
}

export function Header({ date }: HeaderProps) {
    return (
        <div className="header">
            <h2>{date}</h2>
        </div>
    )
}
