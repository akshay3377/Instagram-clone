import { FooterLinks } from "../../../Constants/footer";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center my-[20px]">
        <div className="flex">
          {FooterLinks.map((element, index) => (
            <a
              key={index}
              className=" mx-[9px] text-[#8e8e8e] text-[12px] hover:underline"
              href={element.LINK}
            >
              {element.TITLE}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center text-[#8e8e8e]  text-[12px]">
        <div>English (UK)</div>
        <div className="mx-[16px]">&#169; 2023 instagram from Meta</div>
      </div>
    </>
  );
};
export default Footer;
