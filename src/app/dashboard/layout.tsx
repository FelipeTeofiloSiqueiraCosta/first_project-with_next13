interface LayoutDashboard {
  children: React.ReactNode;
}

export default function LayoutDashboard({ children }: LayoutDashboard) {
  return (
    <>
      <h1>Layout dashboar</h1>
      {/* esse h1 vai ser renderizado na pagina de dashboard */}
      {children}
    </>
  );
}
