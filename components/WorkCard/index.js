import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link relative"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
      </div>
      <h1 className="mt-5 text-3xl font-medium">{name ? name : "Project Name"}</h1>
      <h2 className="text-xl opacity-50">{description ? description : "Description"}</h2>
    </div>
  );
};

export default WorkCard;
