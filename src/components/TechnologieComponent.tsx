interface TechnologieComponentProps {
  name: string;
  img: string;
}

const TechnologieComponent = ({ name, img }: TechnologieComponentProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <i className={` ${img} text-5xl text-[#d9d9d9]`}></i>
      <p className="text-[#d9d9d9]">{name}</p>
    </div>
  );
};

export default TechnologieComponent;
