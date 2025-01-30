import { HomeCarousel } from '@/components/shared/home/home-carousel'
import data from '@/lib/data'

export default async function Page() {
  return (
    <div>
      <HomeCarousel items={data.carousels} />
      <h1 className="h1-bold text-center p-10">Home Page Content</h1>
    </div>
  )
}
