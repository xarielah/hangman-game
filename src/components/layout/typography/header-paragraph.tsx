import React from "react";

interface IHeaderParagraphProps {
  header: string;
  paragraph: string;
}

const HeaderParagraph = ({ header, paragraph }: IHeaderParagraphProps) => {
  return (
    <article className="text-center flex flex-col space-y-6 items-center justify-center">
      <h1 className="font-bold text-4xl">{header}</h1>
      <p className="font-light text-xl max-w-xl">{paragraph}</p>
    </article>
  );
};

export default HeaderParagraph;
