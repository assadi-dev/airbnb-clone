import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition: duration-200 ease-out">
      <div className="relative h-80 md:h-60 w-80 md:w-60 ">
        <Image
          src={img}
          alt="image-medium-card"
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
