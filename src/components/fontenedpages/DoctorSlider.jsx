import React, { useState } from "react";

const doctors = [
  {
    image: "https://mitranita.com/wp-content/uploads/2018/08/mitranita-8.16.18.jpg",
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    description: "Specialist in treating heart diseases with 10 years of experience.",
  },
  {
    // image: "https://via.placeholder.com/600x300?text=Dr.+Sarah+Lee",
    image: "https://avatars.mds.yandex.net/i?id=e7ad39aa994622adb34acef37034264976203821-9097932-images-thumbs&n=13",
    name: "Dr. Sarah Lee",
    specialization: "Dermatologist",
    description: "Expert in skin treatments and cosmetic procedures.",
  },
  {
    // image: "https://via.placeholder.com/600x300?text=Dr.+Mike+Smith",
    image: "https://avatars.mds.yandex.net/i?id=6022f35b37c8632cddcfaff83f2142b75e8035b7-5099351-images-thumbs&n=13",
    name: "Dr. Mike Smith",
    specialization: "Orthopedic Surgeon",
    description: "Specialist in bone surgeries and joint replacement.",
  },
];

const DoctorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === doctors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  return (

    <div className=" d-flex mx-6 ml-24">
<div>


    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Experties</h1>
      <p className="text-gray-600">
        Our team of experienced doctors is here to provide the best healthcare services. 
        They are specialists in various fields, ensuring top-quality treatment for every patient. 
        With compassion and dedication, they strive to deliver personalized care. 
        Whether it’s preventive care, diagnosis, or complex procedures, our doctors are fully equipped. 
        We prioritize your health and well-being with the latest medical practices. 
        Each doctor focuses on building trust and effective communication. 
        Your journey towards better health starts with our expert team. 
        We are committed to helping you live your healthiest life.
      </p>
    </div>
</div>

<div>

   

    <div className="relative w-full max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Specialists 
      </h1>

      <div className="overflow-hidden rounded-lg">
        <img
          src={doctors[currentIndex].image}
          alt={doctors[currentIndex].name}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{doctors[currentIndex].name}</h2>
        <p className="text-gray-600">{doctors[currentIndex].specialization}</p>
        <p className="mt-2 text-gray-500">{doctors[currentIndex].description}</p>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-700 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ◀
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-700 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ▶
      </button>
    </div>


    </div>
    </div>
  );
};

export default DoctorSlider;
