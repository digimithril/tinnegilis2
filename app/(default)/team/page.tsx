export const metadata = {
    title: 'Team',
    description: "Tinne Gilis' Website",
}

import Image from 'next/image'

import SportMind from '@/public/images/sportmind.png'
import Tuxedo from '@/public/images/tuxedowellness.jpeg'

export default function Sponsors() {
    return (
        <>
            <section className="relative mb-8">



                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Hero content */}
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">




                        <div className="justify-center">
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                <h1 className="h2">Team</h1>

                                <p className="text-gray-800 pt-2 text-center">Meet the team behind Tinne.</p>

                            </div>


                        </div>
                        <div className="h-1/4 mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 pt-4 w-6/6 mx-auto justify-items-center text-center">

                                {/* <div className="pt-2 pb-8">
                                    <Image unoptimized src={SportMind}
                                        alt="dunlop"
                                        width={300}
                                        className="mx-auto mb-16">

                                    </Image>
                                    <h2 className="font-semibold text-xl pt-4 text-gray-800">Jesse Englebrecht</h2>
                                </div> */}

                                <div className="pt-2 pb-8">
                                    <Image unoptimized src={Tuxedo}
                                        alt="dunlop"
                                        width={300}
                                        className="mx-auto mb-16">

                                    </Image>
                                    <h2 className="font-semibold text-xl pt-4 text-gray-800">Phil Wilkins</h2>
                                </div>
                            </div>
                        </div>
                        {/* <div className="mx-auto max-w-xl text-center p-6 rounded-2xl bg-yellow-100"
                            data-aos="fade-up">
                            <h1 className="h3">Gold Tier</h1>

                        </div>
                        <br></br> */}


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
