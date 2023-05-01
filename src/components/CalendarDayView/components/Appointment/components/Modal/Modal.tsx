import React from 'react'
import './Modal.css'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export function Modal(props: ModalProps) {
    const { isOpen, onClose, children } = props

    if (!isOpen) {
        return null
    }

    return (
        <div className={`modal-overlay${isOpen ? ' open' : ''}`}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}
