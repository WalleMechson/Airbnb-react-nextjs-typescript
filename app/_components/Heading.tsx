"use client";

interface HeadingInterface {
  title: string;
  subtitle: string;
  center?: boolean;
}

const Heading = ({ title, subtitle, center }: HeadingInterface) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading