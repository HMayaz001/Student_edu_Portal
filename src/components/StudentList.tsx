import React from "react";

type Iprops = {
  title: string;
};

const Student: React.FC<Iprops> = ({ title }) => {
  return <div>{title}</div>;
};

export default Student;
