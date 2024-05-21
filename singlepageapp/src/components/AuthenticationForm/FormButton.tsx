import React from "react";

const FormButton = ({
    text,
    onClickFunction,
    disabled
  }: {
    text: string;
    onClickFunction: (e: React.SyntheticEvent) => void;
    disabled: boolean;
  }) => {
    return (
      <button className="py-2 px-4 text-base bg-darkgreen hover:bg-lightgreen text-white" type="submit" onClick={onClickFunction} disabled={disabled}>
        {text}
      </button>
    );
};

export default FormButton;