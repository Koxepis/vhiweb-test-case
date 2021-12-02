import React from "react";
import { classNames } from "../../../shared/utils/classNames";
interface Props {
  className?: string;
  children: any;
  color?: string;
}

const Card: React.FC<Props> = (props) => {
  const { className, children } = props;
  return (
    <div
      className={classNames(
        "border-solid border-2 border-neutral-700 rounded-lg transition hover:ring-4 hover:ring-neutral-700/15 overflow-hidden max-w-full lg:max-w-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
