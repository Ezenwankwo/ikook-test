import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = (props) => {
  return <label {...props} />;
};
