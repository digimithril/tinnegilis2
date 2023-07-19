import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import Gilis1 from '/public/images/Image2.jpeg'
export default function Hero() {
  return (
    <section className="relative mb-8">



      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero image */}
          <Image unoptimized src={Gilis1}
            alt="gilis"
            width={750}
            height={426}
            className="mx-auto mb-16">

          </Image>

          {/* Section header */}
          <div className="text-center pb-12 md:pb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              <span className="bg-clip-text text-black">
                Ti</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-yellow-400">
                nn</span>
              <span className="bg-clip-text  text-yellow-400">
                e G</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
              >il</span>
              <span className="bg-clip-text text-red-500">
                is</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-2" data-aos="zoom-y-out" data-aos-delay="150">
                Squash Player</p>

            </div>
          </div>



        </div>

      </div>


    </section>
  )
}