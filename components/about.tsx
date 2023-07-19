import Image from 'next/image'
import Gilis2 from '@/public/images/gilis2.jpeg'

export default function Bio() {
    return (
        <section className="relative mb-8">



            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20 mx-auto">




                    <div className="justify-center">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h1 className="h2">About Tinne</h1>
                        </div>
                        <Image unoptimized src={Gilis2}
                            alt="gilis"
                            width={600}
                            height={426}
                            className="mx-auto mb-16">

                        </Image>

                    </div>

                    <div className="h-1/4 mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 pt-4 w-6/6 mx-auto justify-items-center text-center">
                            <div className="pt-2 pb-8">
                                <h2 className="font-semibold text-xl pt-4 text-gray-800">Date of Birth</h2>
                                <p className="text-gray-500 pt-2">October 29, 1997</p>
                            </div>
                            <div className="pt-2 pb-8">
                                <h2 className="font-semibold text-xl pt-4 text-gray-800">Place of Birth</h2>
                                <p className="text-gray-500 pt-2">Mol, Belgium</p>
                            </div>
                            <div className="pt-2 pb-8">
                                <h2 className="m-auto font-semibold text-xl pt-4 text-gray-800">Nationality</h2>
                                <p className="text-gray-500 pt-2">Belgian</p>
                            </div>
                            <div className="pt-2 pb-8">
                                <h2 className="font-semibold text-xl pt-4 text-gray-800">Handed</h2>
                                <p className="text-gray-500 pt-2">Right</p>
                            </div>
                            <div className="pt-2 pb-8">
                                <h2 className="font-semibold text-xl pt-4 text-gray-800">Height</h2>
                                <p className="text-gray-500 pt-2">169 cm / 66.5 in</p>
                            </div>
                            <div className="pt-2 pb-8">
                                <h2 className="font-semibold text-xl pt-4 text-gray-800">Weight</h2>
                                <p className="text-gray-500 pt-2">62 kg / 136.7 lbs</p>
                            </div>
                            <div className="pt-2 pb-8">
                                <h2 className="font-semibold text-xl pt-4 text-gray-800">Racket</h2>
                                <p className="text-gray-500 pt-2">HF XT Revelation 125</p>
                            </div>
                            <div className="pt-2 pb-8">
                                <h2 className="font-semibold text-xl pt-4 text-gray-800">Racket Sponsor</h2>
                                <p className="text-gray-500 pt-2">Dunlop</p>
                            </div>
                            <div className="pt-2 pb-8">
                                <h2 className="font-semibold text-xl pt-4 text-gray-800">Highest World Ranking</h2>
                                <p className="text-gray-500 pt-2">#11 in October 2022</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 mx-auto px-16">
                        <div className="pt-2 mb-6">

                            <p className="text-gray-800 pt-2 text-center">Tinne Gilis is Belgium’s No.2. She has become a permanent fixture of the world’s top 25 in recent years.</p>
                        </div>

                        <div className="pt-2 mb-6">
                            <h2 className="font-semibold text-xl pt-4 text-gray-800">Early Years</h2>
                            <p className="text-gray-800 pt-2">She turned professional in 2014, and the year after that, she made her first quarter final appearance on the PSA Tour. However, she was beaten by her sister in the last eight. The same happened in the Paderborn Open in 2016, before she reached the semis of the Harrow Ukrainian Squash Cup. She also made the semis of the Edinburgh Sports Club Open in the early part of 2017.
                                <br></br>That was her breakthrough year, as she reached the last four in seven tournaments she played in. This included her first two titles on the PSA Tour. Gilis had to wait until the October to secure her first crown, which came after beating Enora Villard in the final of the Val de Marne. The Belgian then beat Haley Mendez to win the International D’Italia two months later.</p>
                        </div>


                        <div className="pt-2 mb-6">
                            <h2 className="font-semibold text-xl pt-4 text-gray-800">2018-19</h2>
                            <p className="text-gray-800 pt-2">2018 was more of a barren year for the youngster, as she only managed quarter final appearances in three tournaments; the Irish Squash Open, Tournament of Pyramides and the Open International de Squash de Nantes. The younger of the Gilis sisters made it to the last eight of the J Warren Young Memorial Texas Open and the Cannon Kirk Irish Open in the first half of 2019, as well as breaking into the World's top 30 for the first time in her career.</p>
                        </div>

                        <div className="pt-2 mb-6">
                            <h2 className="font-semibold text-xl pt-4 text-gray-800">2019-21</h2>
                            <p className="text-gray-800 pt-2">The young Belgian made her way into the top 20 in the World Rankings for the first time during the 2019-2020 campaign, joining her older sister Nele in that bracket. This was down to reaching the last 16 of the PSA Women’s World Championship for the first time, along with a quarter-final appearance at the PSA Bronze level Bahl and Gaynor Cincinnati Cup.
                                <br></br>She also reached the last 16 of her final three events of 2020, the Manchester Open, CIB Egyptian Open and the CIB Black Ball Squash Open. That run continued into the start of 2021, as Gilis made it to the third round of the CIB PS Black Ball Squash Open in March. Later that year, the Belgian reached the last eight of the Manchester Open, and the semi-finals of the Bronze level DAC Pro Squash Classic.
                            </p>

                        </div>

                        <div className="pt-2 mb-6">
                            <h2 className="font-semibold text-xl pt-4 text-gray-800">Recent Years</h2>
                            <p className="text-gray-800 pt-2">

                                She started 2022 with a semi-final appearance at the Cleveland Classic and a quarter final result at the Cincinnati Gaynor Cup, before then going on to reach a first Platinum level quarter final, as she went all the way to the last eight at the Allam British Open.

                                <br></br>
                                That kicked off a run which saw her move to her highest ever World Ranking, as she then won two Challenger 30 level events in the space of three weeks. Gilis won both the Annecy Rose Open and the Cannon Kirk Irish Squash Open in April to move up to World No.13. She then made the last eight of the El Gouna International before finishing runner-up at the RMCLUB Women’s Open Presented by Expression Networks in Mauritius, her last appearance of the season.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}