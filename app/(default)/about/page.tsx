export const metadata = {
    title: 'About',
    description: "Tinne Gilis' Website",
}
import Features from '@/components/features'

import Bio from '@/components/about'

export default function About() {
    return (
        <>

            <Bio />
            <Features />

        </>
    )
}
