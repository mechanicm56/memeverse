export default function Main() {
    return (
        <>
        <Navbar />
            <main className="bg-white dark:bg-gray-700">
              <Sidebar show>
                {children}
              </Sidebar>
            </main>
            <BottomNavigation />
        </>
    )
}