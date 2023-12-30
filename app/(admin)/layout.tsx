export const metadata = {
  title: 'CMS | Mood Media',
  description: 'Mood Media CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
