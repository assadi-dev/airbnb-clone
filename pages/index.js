import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LargeCard from "../components/LargeCard/LargeCard";
import MediumCard from "../components/MediumCard/MediumCard";
import SmallCard from "../components/SmallCard/SmallCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

export default function Home({ exploreData, cardsData }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowContent(true);
    }
  }, [inView]);

  const fadeInUp = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    show: { x: 0, opacity: 1, transition: { type: "ease-out", duration: 0.5 } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  return (
    <motion.div exit={{ opacity: 0 }} className="">
      <Head>
        <title> Airbnb - clone </title> <link rel="icon" href="/favicon.ico " />{" "}
      </Head>
      {/** Header */}
      <Header />
      {/** Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore NearBy</h2>
          {/** Pull some data from a server - API endpoints */}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map((item, index) => (
              <SmallCard
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </motion.div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywehre</h2>
          <div ref={ref} className="my-5">
            {showContent && (
              <motion.div
                className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 md:justify-between"
                variants={stagger}
                initial="hidden"
                animate="show"
              >
                {cardsData?.map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <MediumCard img={item.img} title={item.title} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
        <section className="relative py-16">
          <div>
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="The Greatest Outdoors"
              description="Wishlist curated by Airbnb."
              buttonText="Get Inspired"
            />
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
