

import React, { useState, useEffect, useRef } from "react";
// import { Com } from "./Com";

export const Swiper = () => {
    // const notify = () => toast("Wow so easy!");
    
    const [cards] = useState([
        {
          id: 1,
          image: "https://avatars.mds.yandex.net/i?id=b5786c2219b38b94b8b51472202cc0244fc29472-4886004-images-thumbs&n=13",
          title: "Stomach",
          description:
            "Stomach-related issues can range from acidity to ulcers. Proper diet and hydration are essential for maintaining digestive health. Regular check-ups help in early diagnosis of any abnormalities. Avoiding excessive junk food is key for long-term wellness.",
        //   price: 8.99,
          link: "https://lqrs.com",
        },
        {
          id: 2,
          image: "https://avatars.mds.yandex.net/i?id=caf5350462973466ac80334077a3ab7d09d9f09b-3989655-images-thumbs&n=13",
          title: "Diarrhea",
          description:
            "Diarrhea can result from infections or food intolerance. Staying hydrated with electrolytes is crucial during treatment. Long-term diarrhea may indicate more severe underlying health issues. Consulting a healthcare professional ensures effective.",
          price: 5.49,
          link: "https://lqrs.com",
        },
        {
          id: 3,
          image: "https://avatars.mds.yandex.net/i?id=a7d309e73327962a53d29487bf5ab7ed19125ddfe653e733-5440551-images-thumbs&n=13",
          title: "High Blood Pressure",
          description:
            "High blood pressure increases the risk of heart disease and stroke. Monitoring blood pressure regularly helps in its effective management. A balanced diet low in sodium is beneficial. Exercise and stress management play significant roles in reducing hypertension.",
          price: 4.99,
          link: "https://lqrs.com",
        },
        {
          id: 4,
          image: "https://avatars.mds.yandex.net/i?id=4b6e338406481cc11bc2adaa90bc03f72b4c2ab1-6235668-images-thumbs&n=13",
          title: "Control on Sugar",
          description:
            "Controlling blood sugar is essential for diabetic patients. Regular physical activity and dietary management are key elements. Checking glucose levels frequently prevents complications. Proper medication adherence ensures optimal blood sugar control.",
          price: 7.99,
          link: "https://lqrs.com",
        },
        {
          id: 5,
          image: "https://avatars.mds.yandex.net/i?id=50f8ca6dabd7168f8016ddbb8641c0613137302b0016612b-5648147-images-thumbs&n=13",
          title: "Blood Cancer",
          description:
            "Blood cancer affects blood cells, impairing their normal function. Timely diagnosis is crucial for effective treatment. Chemotherapy and bone marrow transplants are common interventions. Emotional and physical support play a vital role in recovery.",
          price: 6.49,
          link: "https://lqrs.com",
        },
        {
          id: 6,
          image: "https://avatars.mds.yandex.net/i?id=d08bc8551d1fd48bbbf9382aa4dc43f003086a36-4577816-images-thumbs&n=13",
          title: "Heart Replacement",
          description:
            "Heart replacement, or transplant, is a critical procedure for severe heart failure. It requires a compatible donor heart and lifelong immunosuppressive medication. Regular follow-ups with the healthcare team are mandatory. Adopting a healthy lifestyle post-surgery is essential for long-term success.",
          price: 3.99,
          link: "https://lqrs.com",
        },
        {
          id: 7,
          image: "https://avatars.mds.yandex.net/i?id=4d88c956c0dda27840a977142aff2839-5865989-images-thumbs&n=13",
          title: "Brain Tumor",
          description:
            "Brain tumors can be benign or malignant, affecting brain function. Symptoms vary, including headaches, seizures, and memory loss. Treatment options include surgery, radiation, and chemotherapy. Early intervention offers the best chance for recovery.",
          price: 4.99,
          link: "https://lqrs.com",
        },
        {
          id: 8,
          image: "https://avatars.mds.yandex.net/i?id=e4bfafe8360d7121fcfc5908963edeacbea5ea6d-9211032-images-thumbs&n=13",
          title: "Lungs",
          description:
            "Lung health is vital for efficient breathing and oxygen exchange. Conditions like asthma and COPD require long-term management. Quitting smoking significantly reduces the risk of lung diseases. Regular exercise and breathing exercises improve lung capacity.",
          price: 4.99,
          link: "https://lqrs.com",
        },
        {
          id: 9,
          image: "https://avatars.mds.yandex.net/i?id=9fab36f6d10c013e2e272fc687e9a1461ec990fc-8280929-images-thumbs&n=13",
          title: "Broken Arm",
          description:
            "A broken arm usually results from trauma or accidents. X-rays confirm the diagnosis, and treatment may involve a cast or surgery. Physical therapy helps in regaining strength post-healing. Adequate rest and care prevent further complications.",
          price: 4.99,
          link: "https://lqrs.com",
        },
      ]);
      

  const sliderRef = useRef(null);

  // Swipe functionality using mouse events
  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeaveOrUpHandler = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; // Adjust scrolling speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDownHandler);
    slider.addEventListener("mouseleave", mouseLeaveOrUpHandler);
    slider.addEventListener("mouseup", mouseLeaveOrUpHandler);
    slider.addEventListener("mousemove", mouseMoveHandler);

    // Cleanup on unmount
    return () => {
      slider.removeEventListener("mousedown", mouseDownHandler);
      slider.removeEventListener("mouseleave", mouseLeaveOrUpHandler);
      slider.removeEventListener("mouseup", mouseLeaveOrUpHandler);
      slider.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
   

<div>
<div className="text-4xl text-center font-bold m-5">
  <h1>Get Treatment</h1>
</div>


    <div

  
      ref={sliderRef}
      className="overflow-x-scroll scrollbar-hide mb-4 relative px-0.5 m-8"
      style={{ overflowY: "hidden" }}
    >
      <div className="flex snap-x snap-mandatory gap-4" style={{ width: "max-content" }}>
        {cards.map((card) => (
          <div key={card.id} className="flex-none w-64 snap-center">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
                <div className="flex justify-between items-center mt-4">
                  {/* <span className="text-2xl font-extrabold text-gray-900">
                    ${card.price.toFixed(2)}
                  </span> */}
                  {/* <a
                    href={card.link}
                    className="text-white bg-fuchsia-950 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  > */}
                    {/* <svg */}
                    {/* //   xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </a> */}
<a href="/createappointment">
                  <button className="border-2 bg-gray-900 rounded p-1 text-white">Get Treatment</button>
                  {/* <ToastContainer /> */}
</a>
                 
                </div>
              </div>
            </div>
          </div>
         

        ))}
      </div>
    </div>
    </div>
  );
};





