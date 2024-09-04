import './globals.css'

export const metadata = {
  title: 'Learn Isle Dashboard',
  description: 'A dashboard for tracking learning progress',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}