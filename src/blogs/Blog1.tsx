// // import { links3 } from "@/stack/links";
import { useEffect, useRef, useState } from "react";
// import parse from 'html-react-parser'

const Blog1 = () => {
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
    <div className="grid gap-5 px-4 md:px-10 text-base max-w-4xl mx-auto">
      <h1 className="px-4 md:px-20 my-6 md:my-10 text-2xl md:text-4xl font-bold text-center">
        Discovering the World of Luxury Yachting
      </h1>
      <img
        src="/images/blogs/1/1.jpg"
        alt="Kong's Grand Adventure: Discovering the World of Luxury Yachting"
        className="mx-auto my-5 w-full max-w-2xl"
      />
      <p className="-mt-8 text-sm italic text-center px-4 md:px-0">
        Embark on a journey of opulence and exploration as we delve into the captivating world of luxury yachting. Whether you're seeking a romantic escape, a family adventure, or a unique expedition, luxury yachting offers unparalleled experiences tailored to your desires.
      </p>
      <p className="text-justify px-4 md:px-0">
        <strong>Summary:</strong> Have you ever dreamed of cruising the world's most breathtaking waters, surrounded by luxury at every turn? I certainly have, and recently, I took the plunge into the mesmerizing world of luxury yachting. The allure of exploring exclusive destinations, indulging in five-star amenities, and having the freedom to chart your own course is simply irresistible.
      </p>
      <h2 className="mt-5 text-xl md:text-2xl font-bold px-4 md:px-0">
        Introduction: Setting Sail on a Dream
      </h2>
      <p className="text-justify px-4 md:px-0">
        Have you ever dreamed of cruising the world's most breathtaking waters, surrounded by luxury at every turn? I certainly have, and recently, I took the plunge into the mesmerizing world of luxury yachting. The allure of exploring exclusive destinations, indulging in five-star amenities, and having the freedom to chart your own course is simply irresistible. In this blog post, I'll share why luxury yachting is not just a travel choice but a gateway to unforgettable experiences.
      </p>
      <h2 className="mt-5 text-xl md:text-2xl font-bold px-4 md:px-0">
        Body: The Allure of Luxury Yachting
      </h2>
      <h3 className="mt-5 text-lg md:text-xl font-bold px-4 md:px-0">
        Why Luxury Yachting? The Ultimate Escape
      </h3>
      <p className="text-justify px-4 md:px-0">
        Luxury yachting addresses the universal desire for freedom and adventure, allowing travelers to experience the world from a unique vantage point. Why settle for a conventional vacation when you can have an entire yacht at your disposal? Here's what makes luxury yachting a compelling choice:
      </p>
      <ul className="grid gap-5 ml-4 md:ml-10 list-disc list-outside px-4 md:px-0">
        <li className="text-justify">
          <strong>Exclusive Views:</strong> Witness the world's most stunning landscapes from the privacy of your own yacht.
        </li>
        <li className="text-justify">
          <strong>Unmatched Privacy:</strong> Enjoy a secluded retreat with just your chosen companions.
        </li>
        <li className="text-justify">
          <strong>Customized Experiences:</strong> Your itinerary is tailored to your preferences, from destinations to onboard activities.
        </li>
        <li className="text-justify">
          <strong>Luxury and Comfort:</strong> Experience sumptuous accommodations and world-class service at sea.
        </li>
      </ul>
      <h3 className="mt-5 text-lg md:text-xl font-bold px-4 md:px-0">
        Top Destinations for Luxury Yacht Charters
      </h3>
      <p className="text-justify px-4 md:px-0">
        Luxury yachting opens up a world of travel possibilities, each more enticing than the last. Here are some top-notch destinations to consider for your next voyage:
      </p>
      <ul className="grid gap-5 ml-4 md:ml-10 list-disc list-outside px-4 md:px-0">
        <li className="text-justify">
          <strong>The Mediterranean:</strong> Sail to Ibiza for its chic atmosphere, or explore Saint-Tropez's charming streets. Greece's islands offer rich culture and warm hospitality.
        </li>
        <li className="text-justify">
          <strong>The Caribbean:</strong> Relax on white sandy beaches or explore vibrant marine life.
        </li>
        <li className="text-justify">
          <strong>Alaska and Antarctica:</strong> Perfect for thrill-seekers, offering activities like heli-skiing and kayaking amidst icebergs.
        </li>
        <li className="text-justify">
          <strong>The Galápagos Islands:</strong> Discover unique flora and fauna with Ecoventura's luxury yachts, such as Origin, Theory, and Evolve.
        </li>
      </ul>
      <h3 className="mt-5 text-lg md:text-xl font-bold px-4 md:px-0">
        The Experience Onboard: A World of Luxury
      </h3>
      <p className="text-justify px-4 md:px-0">
        Onboard a luxury yacht, you'll find a sanctuary of comfort and opulence. Here's what you can expect:
      </p>
      <ul className="grid gap-5 ml-4 md:ml-10 list-disc list-outside px-4 md:px-0">
        <li className="text-justify">
          <strong>Elegant Accommodations:</strong> Enjoy luxury suites with king-size beds and panoramic views.
        </li>
        <li className="text-justify">
          <strong>Gourmet Dining:</strong> Indulge in fresh, locally sourced cuisine prepared by top chefs.
        </li>
        <li className="text-justify">
          <strong>Leisure and Entertainment:</strong> Relax in the jacuzzi, explore the library, or enjoy our open bar.
        </li>
        <li className="text-justify">
          <strong>Personalized Service:</strong> With a dedicated crew, your needs are always the top priority.
        </li>
      </ul>
      <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic">
        "We leave no stone unturned when it comes to catering to our guests' wishes, ensuring that you enjoy five-star service from the moment you set foot on board."
      </blockquote>
      <h3 className="mt-5 text-lg md:text-xl font-bold px-4 md:px-0">
        Planning Your Luxury Yacht Adventure
      </h3>
      <p className="text-justify px-4 md:px-0">
        Ready to take the plunge into luxury yachting? Here's how you can start planning:
      </p>
      <ul className="grid gap-5 ml-4 md:ml-10 list-disc list-outside px-4 md:px-0">
        <li className="text-justify">
          <strong>Define Your Goals:</strong> Are you looking for romance, family bonding, or adventure?
        </li>
        <li className="text-justify">
          <strong>Choose Your Destination:</strong> Decide based on your interests, whether it's culture, relaxation, or excitement.
        </li>
        <li className="text-justify">
          <strong>Customize Your Itinerary:</strong> Work with a charter company to tailor your experience.
        </li>
        <li className="text-justify">
          <strong>Consider the Details:</strong> Think about the amenities and services that matter most to you.
        </li>
      </ul>
      <h2 className="mt-5 text-xl md:text-2xl font-bold px-4 md:px-0">
        Conclusion: Your Next Step to Adventure
      </h2>
      <p className="text-justify px-4 md:px-0">
        Luxury yachting is more than a vacation; it's a transformative experience that offers unparalleled freedom, comfort, and adventure. Whether you're sailing through the Mediterranean, exploring the Galápagos, or relaxing in the Caribbean, the world is your oyster. So why wait? Start planning your grand adventure today and discover the world in unparalleled style and luxury.
      </p>
      <p className="text-justify px-4 md:px-0">
        Ready to set sail? Contact a luxury yacht charter company and begin your journey towards the ultimate escape.
      </p>
      
    </div>
  );
};

export default Blog1;

