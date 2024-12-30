export default function CompaniesWorkedFor() {
  const companies: string[] = [
    "/images/companies_worked_for/bon_appetit.png",
    "/images/companies_worked_for/tt.png",
    "/images/companies_worked_for/gq.png",
    "/images/companies_worked_for/conde.png",
    "/images/companies_worked_for/ny.png",
    "/images/companies_worked_for/vf.png",
    "/images/companies_worked_for/architectural_digest.png",
    "/images/companies_worked_for/rare_beauty.png",
    "/images/companies_worked_for/vogue.png",
    "/images/companies_worked_for/Wired_logo.png",
    "/images/companies_worked_for/bime.png",
    "/images/companies_worked_for/tree_card.png",
  ];

  return (
    <div className="p-3 flex flex-col items-center">
      <h1 className="mb-5 font-bold text-4xl lg:self-start">
        Companies Worked For
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 items-center gap-y-3">
        {companies.map((imgSrc, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={imgSrc} className="lg:w-2/3 w-10/12 h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
