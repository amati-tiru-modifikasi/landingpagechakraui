import React from 'react'

// Komponen 
import LandingLayout from '../components/layouts/LandingLayout'
import Hero from '../components/sections/Hero'

function Landing() {
    return (
        <LandingLayout>
            <Hero 
                title="Build this RAD landing page from scratch"
                subtitle="This is the subheader section where you describe the basic benefits of your product"
                image="https://source.unsplash.com/collection/404339/800x600"
                ctaText = "Create your account now"
                ctaLink = "/signup"
            />
        </LandingLayout>
    )
}

export default Landing
