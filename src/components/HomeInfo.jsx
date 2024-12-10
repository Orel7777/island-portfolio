import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="text-center font-medium sm:text-xl">{text}</p>

      <Link className="neo-brutalism-white neo-btn" to={link}>
        {btnText}
        <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="neo-brutalism-blue mx-5 px-8 py-4 text-center text-white sm:text-xl sm:leading-snug">
      היי ,אני <span className="font-bold">אוראל בוקריס 👋🏻</span> <br />
      מביא את הדמיון לחיים בתלת-מימד באתר שלך
    </h1>
  ),
  2: (
    <InfoBox
      text="פיתוח תלת-מימד שמשלב עיצוב חדשני באתרים ,חיים, חווייתיים ומרשימים"
      link="/about"
      btnText="מידע נוסף"
    />
  ),
  3: (
    <InfoBox
      text="פיתחתי אתרי אינטרנט מרהיבים וחוויות תלת-ממדיות סוחפות שמשאירות רושם בלתי נשכח. רוצה לראות בעצמך?"
      link="/projects"
      btnText="לפרויקטים נוספים לחץ כאן "
    />
  ),
  4: (
    <InfoBox
      text="מחפש מפתח שיביא את הפרויקט שלך לחיים? אני זמין במרחק הודעה קצרה."
      link="/contact"
      btnText="אני כאן בשבילך"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
