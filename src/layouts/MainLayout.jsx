import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader'
import PageTransition from '../components/PageTransition'
import ScrollToTop from '../utils/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <PageLoader />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <PageTransition />
      </main>
      <Footer />
    </div>
  )
}
