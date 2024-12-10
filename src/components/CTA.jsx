import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-lg">
        יש לך רעיון לפרויקט חדש ?
        <br className="hidden sm:block" />
        בוא נבנה משהו מדהים ביחד !
      </p>
      <Link
        to={"/contact"}
        className="w-full rounded-lg bg-blue-500 px-6 py-2 text-center text-white hover:bg-blue-600 sm:w-[400px]"
      >
        לחץ כאן כדי להתחיל
      </Link>
    </section>
  );
};

export default CTA;
