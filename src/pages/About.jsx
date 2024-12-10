import CTA from "../components/CTA.JSX";
import { skills } from "../constants/index";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        היי אני <span className="blue-gradient_text font-semibold drop-shadow">אוראל בוקריס</span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          אני מפתח אתרים המתמחה ביצירת חוויות משתמש דינמיות וחדשניות, כולל שימוש בטכנולוגיות מתקדמות
          כמו תלת-ממד. אני יוצר אפליקציות חכמות המותאמות לטלפונים ניידים ולמסכים שונים, עם דגש על
          יצירתיות ודיוק המותאמים לצרכי הלקוח
        </p>
        <div className="flex flex-col py-10">
          <h3 className="subhead-text">הכלים שאני עובד איתם:</h3>
          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container h-20 w-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front flex items-center justify-center rounded-xl">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </div>
    </section>
  );
};

export default About;
