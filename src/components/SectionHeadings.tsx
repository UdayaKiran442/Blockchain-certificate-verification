const SectionHeadings = ({
  heading,
  textCenter,
}: {
  heading: string;
  textCenter: string;
}) => {
  return (
    <div>
      <h2 className={`text-3xl font-bold ${textCenter}`}>{heading}</h2>
    </div>
  );
};

export default SectionHeadings;
