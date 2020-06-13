import React from 'react'

export default function Layout({ children }) {
    return (
        <div style={{ margin: `0 auto`, maxWidth: 1200, padding: `0 1rem` }}>
            {children}
        </div>
    )
}