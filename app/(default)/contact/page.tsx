export const metadata = {
    title: 'Contact',
    description: "Tinne Gilis' Website",
}
import Image from 'next/image'

import Tuxedo from '@/public/images/tuxedowellness.jpeg'


export default function Contact() {
    return (
        <section className="relative mb-8">



            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-32 pb-12  mx-auto">




                    <div className="justify-center">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h1 className="h2">Contact Us</h1>
                        </div>
                        <Image unoptimized src={Tuxedo}
                            alt="tuxedoimage"
                            width={270}
                            className="mx-auto mb-16">

                        </Image>

                    </div>



                    <div className="mt-8 mx-auto px-16">
                        <div className="pt-2 mb-6">

                            <p className="text-gray-800 pt-2 text-center">For any queries, please contact <a style={{ "color": "blue", "textDecoration": "underline" }} href='mailto:philw@tuxedowellness.com'>philw@tuxedowellness.com</a>. Thank you!</p>


                        </div>


                    </div>
                </div>
            </div>


        </section>
    )
}
