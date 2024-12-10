import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        הפרויקטים <span className="blue-gradient_text font-semibold drop-shadow">שלי</span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          יצרתי מגוון פרויקטים ייחודיים, כאשר כל אחד מהם מביא לידי ביטוי את התשוקה שלי לחדשנות
          וטכנולוגיה, התמחיתי בפיתוח חוויות אינטראקטיביות בתלת-מימד המותאמות באופן מושלם לכל מכשיר -
          ממסכי מחשב ועד לטלפונים ניידים, האתרים שלי משלבים אפקטים ואנימציות מרהיבות שמעניקות תחושת
          חיים ותנועה, והופכות כל גלישה לחוויה סוחפת ובלתי נשכחת.
        </p>
      </div>
      <div className="my-20 flex flex-wrap gap-16">
        {projects.map((project) => (
          <div className="w-full lg:w-[400px]" key={project.name}>
            <div className="block-container h-12 w-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front flex items-center justify-center rounded-xl">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="font-poppins text-2xl font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
            </div>
            <div className="mt-5 flex items-center gap-2 font-poppins">
              <Link
                className="font-semibold text-blue-600"
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                קישור לאתר
              </Link>
              <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
