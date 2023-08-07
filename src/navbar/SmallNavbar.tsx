import { Icon } from "@iconify/react";

type SmallNavbarProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const SmallNavbar = ({ setShow, show }: SmallNavbarProps) => {
  return (
    <div className="xl:hidden flex flex-row justify-between items-center gap-16 font-medium text-xl">
      <div className="mr-3 cursor-pointer">
        {show ? (
          <Icon
            onClick={() => setShow(false)}
            icon="maki:cross"
            fontSize={30}
          />
        ) : (
          <Icon onClick={() => setShow(true)} icon="fe:bar" fontSize={30} />
        )}{" "}
      </div>
    </div>
  );
};

export default SmallNavbar;
