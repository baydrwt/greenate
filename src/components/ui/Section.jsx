function Section({ children, color }) {
  return (
      <section className={`px-8 md:px-48 flex flex-col justify-center ${color}`}>{children}</section>
  );
}

export default Section;
