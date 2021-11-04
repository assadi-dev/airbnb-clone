import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LargeCard from "../components/LargeCard/LargeCard";
import MediumCard from "../components/MediumCard/MediumCard";
import SmallCard from "../components/SmallCard/SmallCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Home({ exploreData, cardsData }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log(ref);
      animation.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    }
  }, [inView]);
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
            ref={ref}
            className="grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map((item, index) => (
              <motion.div
                key={index}
                animate={animation}
                initial={{
                  y: "10vh",
                  opacity: 0,
                }}
              >
                <SmallCard
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                  animation={animation}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywehre</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 md:justify-between">
            {cardsData?.map((item, index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <section className="relative py-16">
          <div initial={{ opacity: 0 }}>
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
