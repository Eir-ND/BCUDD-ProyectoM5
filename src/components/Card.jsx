// import Loading from "./Loading";

const Card = ({ details }) => {
  const { name, types, sprites } = details;
  console.log(sprites);
  console.log(types);

  return (
    <>
      <div className="ml-10">
        <h2 className="capitalize">{name}</h2>
        <div>
          <div className="capitalize">
            {types.map((types, index) => (
              <span key={index}>{types.type.name} </span>
            ))}
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <img
            src={sprites.other.dream_world.front_default}
            alt={`${name} sprite`}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
