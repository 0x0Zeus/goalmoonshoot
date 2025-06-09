// import { links3 } from "@/stack/links";
import { useEffect, useRef, useState } from "react";
// import parse from 'html-react-parser'

const Blog2 = () => {
  // const [link3, setLink3] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalState, setModalState] = useState<boolean>(false);
  // const modalOutsideRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const length3 = links3.length;
  //   const random3 = Math.floor(Math.random() * length3);
  //   setLink3(links3[random3]);

  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (modalOutsideRef.current && !modalOutsideRef.current.contains(event.target as Node)) {
  //       setModalState(false);
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [])

  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalState])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setModalState(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    })
    if (modalRef.current) {
      observer.observe(modalRef.current);
    }
    return () => {
      if (modalRef.current) {
        observer.unobserve(modalRef.current);
      }
    }
  }, [])

  return (
    <div className="grid gap-5 px-4 md:px-10 text-base max-w-4xl mx-auto text-white">
      <h1 className="px-4 md:px-20 my-6 md:my-10 text-2xl md:text-4xl font-bold text-center">
        Kong's Caribbean Cruise: Luxury and Laughter
      </h1>
      <img
        src="/images/blogs/2/1.jpg"
        alt="Kong's Lavish Caribbean Cruise: A Hilarious Journey of Royal Relaxation"
        className="mx-auto my-5 w-full max-w-2xl"
      />
      <p className="text-justify px-4 md:px-0">
        <strong>Summary:</strong> Join me on my hilariously luxurious Caribbean cruise experience with Kong, where relaxation meets adventure in the most royal way possible. From diving deep into the azure seas to sipping cocktails under golden sunsets, this journey promises to tickle your funny bone while fulfilling your wanderlust.
      </p>
      <h2 className="mt-5 text-xl md:text-2xl font-bold px-4 md:px-0">
        Introduction: Setting Sail on a Royal Adventure
      </h2>
      <p className="text-justify px-4 md:px-0">
        Imagine a world where the azure sea kisses the horizon, and each wave carries a promise of adventure and relaxation. That's precisely what I embarked upon with Kong on our lavish Caribbean cruise. The Caribbean, with its endless ways to escape the everyday grind, has the perfect blend of luxury, adventure, and relaxation. This journey was more than just a vacation; it was a royal affair of hilarity and rejuvenation. Let's dive into why this experience is not just relevant but essential for every soul yearning for a unique escape.
      </p>
      <h2 className="mt-5 text-xl md:text-2xl font-bold px-4 md:px-0">
        Body: The Voyage of a Lifetime
      </h2>
      <h3 className="mt-5 text-lg md:text-xl font-bold px-4 md:px-0">
        Luxurious Experiences Await
      </h3>
      <p className="text-justify px-4 md:px-0">
        The Caribbean is known for its luxurious experiences, and our cruise was no exception. Picture this:
      </p>
      <ul className="grid gap-5 ml-4 md:ml-10 list-disc list-outside px-4 md:px-0">
        <li className="text-justify">
          Strolling through designer boutiques in Gustavia.
        </li>
        <li className="text-justify">
          Chartering a yacht for a private sunset sail.
        </li>
        <li className="text-justify">
          Exploring the island from a bird's eye view on a helicopter tour.
        </li>
        <li className="text-justify">
          Relaxing in private villa rentals with breathtaking ocean views.
        </li>
        <li className="text-justify">
          Indulging in personal shopping services to find that perfect Caribbean outfit.
        </li>
      </ul>
      <p className="text-justify px-4 md:px-0">
        These experiences are crafted to offer a slice of paradise for everyone, whether you're a celebrity or just want to feel like one.
      </p>
      <h3 className="mt-5 text-lg md:text-xl font-bold px-4 md:px-0">
        Diving into Adventure
      </h3>
      <p className="text-justify px-4 md:px-0">
        For those who have an affinity for the ocean, the Caribbean offers diving conditions that are nothing short of spectacular. Our adventure included:
      </p>
      <ul className="grid gap-5 ml-4 md:ml-10 list-disc list-outside px-4 md:px-0">
        <li className="text-justify">
          Year-round diving with professional certification courses available for novices and pros.
        </li>
        <li className="text-justify">
          Custom dive experiences at stunning sites like Grand Cayman's North Sound, where the walls plunge dramatically to depths of 6,000 feet.
        </li>
        <li className="text-justify">
          Unique encounters at Stingray City, where friendly southern stingrays glide gracefully in shallow waters.
        </li>
        <li className="text-justify">
          Exploring the USS Kittiwake wreck site, an accessible artificial reef teeming with vibrant marine life.
        </li>
      </ul>
      <p className="text-justify px-4 md:px-0">
        Each dive was a reminder of the ocean's beauty and mystery, leaving us both exhilarated and humbled.
      </p>
      <h3 className="mt-5 text-lg md:text-xl font-bold px-4 md:px-0">
        Beyond the Dive: Leisure and Exploration
      </h3>
      <p className="text-justify px-4 md:px-0">
        When not submerged in the ocean's embrace, the Caribbean islands offer numerous ways to unwind and explore:
      </p>
      <ul className="grid gap-5 ml-4 md:ml-10 list-disc list-outside px-4 md:px-0">
        <li className="text-justify">
          Sunset walks along Seven Mile Beach, a perfect way to end the day with Kong.
        </li>
        <li className="text-justify">
          Shopping sprees at Camana Bay, where you can find everything from local crafts to designer goods.
        </li>
        <li className="text-justify">
          Exploring the Queen Elizabeth II Botanic Park, a lush paradise filled with exotic flora.
        </li>
        <li className="text-justify">
          Adventuring through the Crystal Caves, a natural wonder that captivates with its stunning formations.
        </li>
        <li className="text-justify">
          Sunday brunches at Rum Point, where the food is as delightful as the ocean views.
        </li>
      </ul>
      <p className="text-justify px-4 md:px-0">
        These activities ensure that relaxation is paired with discovery, offering a well-rounded experience.
      </p>
      <h3 className="mt-5 text-lg md:text-xl font-bold px-4 md:px-0">
        Choosing the Perfect Time to Cruise
      </h3>
      <p className="text-justify px-4 md:px-0">
        Timing your Caribbean cruise can significantly enhance your experience. Here's a breakdown:
      </p>
      <ul className="grid gap-5 ml-4 md:ml-10 list-disc list-outside px-4 md:px-0">
        <li className="text-justify">
          <strong>Peak Season (December-April):</strong> Perfect weather, lowest rainfall, bustling atmosphere, but premium pricing and essential advanced booking.
        </li>
        <li className="text-justify">
          <strong>Shoulder Season (May & November):</strong> Balanced weather, better value, fewer crowds, and more accommodation options.
        </li>
        <li className="text-justify">
          <strong>Low Season (June-October):</strong> Potential for hurricanes, significant savings, quieter experiences, and last-minute deals.
        </li>
      </ul>
      <p className="text-justify px-4 md:px-0">
        Regardless of when you choose to go, each season offers its unique advantages, making the Caribbean a year-round destination.
      </p>
      <h2 className="mt-5 text-xl md:text-2xl font-bold px-4 md:px-0">
        Conclusion: Plan Your Royal Caribbean Adventure
      </h2>
      <p className="text-justify px-4 md:px-0">
        Reflecting on my journey with Kong, it's clear that a Caribbean cruise is not just about the destination, but the experiences that come with it. From luxurious indulgences to underwater adventures, our trip was a hilarious blend of relaxation and excitement. Whether you're seeking a quick getaway or an extended escape, the Caribbean promises to relax, renew, and revitalize your spirit.
      </p>
      <p className="text-justify px-4 md:px-0">
        If you're ready to transform your dreams into reality, consider booking your cruise with Royal Caribbean today. With expertly crafted itineraries and a perfect blend of luxury and adventure, there's no better time to get on island time. So pack your bags, bring your sense of humor, and set sail on your own hilarious journey of royal relaxation.
      </p>
      <p className="text-justify px-4 md:px-0">
        <em>Book your cruise today and embrace the Caribbean paradise!</em>
      </p>
    </div>
  );
};

export default Blog2;
