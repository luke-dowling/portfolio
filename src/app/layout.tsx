import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

// Self-hosted fonts (same families/weights as the old Google Fonts @import)
import '@fontsource-variable/roboto-mono/wght.css'
import '@fontsource-variable/roboto-mono/wght-italic.css'
import '@fontsource/raleway/900.css'
import '@fontsource/raleway/900-italic.css'
import '@/index.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: "Luke Dowling's Portfolio",
  description: 'Web site created using create-react-app',
  icons: { icon: '/favicon.ico' },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

// Runs before the first paint so the saved theme is applied straight away
// (the server can't read localStorage, so without this a light-theme visitor
// would briefly see the dark theme).
const themeScript = `(function () {
  try {
    var theme = localStorage.getItem('theme');
    if (theme !== 'light' && theme !== 'dark') theme = 'dark';
    var root = document.documentElement;
    root.style.colorScheme = theme;
    root.classList.add(theme);
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
  } catch (e) {}
})();`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
