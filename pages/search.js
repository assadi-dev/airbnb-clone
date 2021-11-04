import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, nbOfGuests } = router.query;
  const formatStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formatStartDate} - ${formatEndDate}`;
  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${range} | ${nbOfGuests} ${
          nbOfGuests > 1 ? "guests" : "guest"
        }`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300 + Stay - {range} - for {nbOfGuests}{" "}
            {nbOfGuests > 1 ? " guests" : " guest"}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              Cancellation Flexibility
            </p>
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              Type of place
            </p>
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              Price
            </p>
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              Rooms and Beds
            </p>
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              More filters
            </p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              (
                { img, title, location, description, star, price, total },
                index
              ) => (
                <InfoCard
                  key={index}
                  title={title}
                  img={img}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}