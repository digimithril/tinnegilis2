export const metadata = {
    title: 'Sponsors',
    description: "Tinne Gilis' Website",
}

import Image from 'next/image'

import Dunlop from '@/public/images/dunlop.png'

export default function Sponsors() {
    return (
        <>
            <section className="relative mb-8">



                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Hero content */}
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">




                        <div className="justify-center">
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                <h1 className="h2">Sponsors</h1>
                            </div>


                        </div>

                        {/* <div className="mx-auto max-w-xl text-center p-6 rounded-2xl bg-yellow-100"
                            data-aos="fade-up">
                            <h1 className="h3">Gold Tier</h1>

                        </div>
                        <br></br> */}

                        <div className="mx-auto max-w-xl text-center p-6 rounded-2xl bg-gray-300"
                            data-aos="fade-up">
                            <h1 className="h3">Racket Sponsor</h1>
                            <Image unoptimized src={Dunlop}
                                alt="dunlop"
                                width={200}
                                className="mx-auto mb-16">

                            </Image>
                        </div>

                        {/* <br></br>
                        <div className="mx-auto max-w-xl text-center p-6 rounded-2xl bg-yellow-700"
                            data-aos="fade-up">
                            <h1 className="h3">Bronze Tier</h1>

                        </div> */}

                    </div>
                </div>


            </section>
        </>
    )
}
