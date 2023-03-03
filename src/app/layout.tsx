export const metadata = {
  title: {
    default: "Felpinho",
    template: "%s | Next13",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Layout root </h1>

        {/* esse h1 vai ser renderizado em todas as paginas pq ele esta dentro de um layout root */}
        {children}
      </body>
    </html>
  );
}
