import React from 'react'

const TreatmentSlider = () => {
  return (
    <div>

<div>
  <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white m-0">
    {/* Themes: blue, purple and teal */}
    <div data-theme="teal" className="mx-auto max-w-6xl">
      <h2 className="sr-only">Featured case study</h2>
      <section className="font-sans text-black">
        <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
          <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
            <div className="h-full">
              <article className="h-full">
                <div className="h-full">
                  <img className="h-full object-cover rounded-lg" src="https://avatars.mds.yandex.net/i?id=cca72f0911267a85a6d23513e47bfc3f-5247746-images-thumbs&n=13" width={333} height={162} alt="&quot;&quot;" typeof="foaf:Image" />
                </div>
                
              </article>
            </div>
          </div>
          <div className="p-6 bg-grey mt-8">
            <div className="leading-relaxed">
              <h2 className="leading-tight text-4xl font-bold text-center">Meet Our Expert Doctors</h2>
              <p className="mt-4 text-center mx-12">

Our team of highly skilled doctors is dedicated to providing exceptional healthcare services. With years of experience and specialized training, they are committed to delivering personalized care to every patient. From heart specialists to orthopedic surgeons, each doctor brings unique expertise to meet your medical needs. </p>
              <p className="mt-4 text-center mx-12">Our dermatologists offer advanced skincare solutions, while our cardiologists focus on heart health. Compassion, professionalism, and patient-centered care are at the core of everything they do. Whether it’s a routine checkup or complex surgery, our doctors are here to guide you at every step of your health journey.</p>
              {/* <p><a className="mt-4 button button--secondary" href="https://inviqa.com/cxcon-experience-transformation">Explore this event</a></p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

    </div>
  )
}

export default TreatmentSlider