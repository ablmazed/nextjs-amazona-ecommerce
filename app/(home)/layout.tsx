import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1>I am Home by home layout</h1>
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  )
}
