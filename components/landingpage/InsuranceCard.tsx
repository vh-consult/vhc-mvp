import { MdDone } from "react-icons/md";
import { Button } from "../ui/button";

interface InsuranceProps {
  title: string,
  description: string,
  price: string,
  priceSuper?: string,
  options: Array<any>,
  buttonText: string,
  dominant?: boolean,
  className: string,
  buttonStyles: string
};

const InsuranceCard = ({
  title,
  description,
  price,
  priceSuper,
  options,
  buttonText,
  dominant,
  className,
  buttonStyles
}: InsuranceProps) => {

  return (
    <div
      className={`p-3 rounded-xl shadow-md relative ${
        dominant ? "text-white bg-green mx-4" : "bg-white border"
      } ${className} `}
    >
      <h3 className="font-medium text-xl" >
        {title}
      </h3>
      <p className="font-normal mb-0">
        {description}
      </p>
      <div className="border-b-[1px] py-1 mb-2">
        <span className="font-semibold text-[36px]">
          {price}.<sup>{priceSuper}</sup>
        </span>
      </div>
      <div>
        {options.map((option, index) => (
          <li
            key={index}
            className="flex my-1 flex-row text-sm items-center justify-start list-none"
          >
            <MdDone className="mr-2" />
            {option}
          </li>
        ))}
      </div>
      <div className="absolute left-0 bottom-2 w-full">
        <Button
          className={`w-[90%] ml-[5%] rounded-md h-[40px] ${buttonStyles}`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default InsuranceCard;
