export default function DashboardLayout({ children,  }: {
     children: React.ReactNode,
     }) {
         return (
            <html lang="pt">
                <head>
                    <title>Ola mundo</title>
                </head>
                <body>{children}</body>
            </html>
          ); 
        }