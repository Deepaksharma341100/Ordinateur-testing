import { type ReactNode, type CSSProperties } from "react";
import { TitleBar, Frame } from "@react95/core";
import { Computer, Help, Close } from "@react95/icons";

interface WindowProps {
  title: string;
  children: ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  outerStyle?: CSSProperties;
  onClose?: () => void;
}

export default function Window({
  title,
  children,
  outerClassName,
  innerClassName,
  outerStyle,
  onClose
}: WindowProps): ReactNode {
  return (
    <Frame
      boxShadow="$out"
      bgColor="$material"
<<<<<<< HEAD
      padding="$0.5"
      className={`${outerClassName} min-[470px]:max-w-[550px]`} // Apply max-width in range
=======
      padding="$4"
      className={outerClassName}
>>>>>>> 5c11e6450381a69ababf60ea28de69d239857873
      style={outerStyle}
    >
      <TitleBar icon={<Computer />} title={title}>
        <TitleBar.OptionsBox>
          <TitleBar.Option>
            <Help />
          </TitleBar.Option>
          <TitleBar.Option>
            <Close onClick={onClose ? () => onClose() : undefined} />
          </TitleBar.Option>
        </TitleBar.OptionsBox>
      </TitleBar>
<<<<<<< HEAD

=======
>>>>>>> 5c11e6450381a69ababf60ea28de69d239857873
      <Frame
        bgColor="white"
        boxShadow="$in"
        padding="$2"
<<<<<<< HEAD
        className={`${innerClassName} min-[470px]:max-w-[550px]`} // Apply max-width in range
=======
        className={innerClassName}
>>>>>>> 5c11e6450381a69ababf60ea28de69d239857873
      >
        <Frame
          height="100%"
          width="100%"
          padding="$2"
<<<<<<< HEAD
          className="overflow-auto text-black-dark"
=======
          className={"overflow-auto text-black-dark"}
>>>>>>> 5c11e6450381a69ababf60ea28de69d239857873
        >
          {children}
        </Frame>
      </Frame>
    </Frame>
  );
}
