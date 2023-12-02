export const metadata = {
    title: 'Proyecto-Final'
}

export default function RootLayout({ children }) {

    return(
        <html lang="en">
            <body>
                {
                    children
                }
            </body>
        </html>
    )
}