import Footer from '@/components/shared/footer'

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  )
}
