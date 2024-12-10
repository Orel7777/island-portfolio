import { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../components/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { alert, showAlert, hideAlert } = useAlert();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "אוראל בוקריס",
          from_email: form.email,
          to_email: "orelbukris7777@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ show: true, text: "תודה! ההודעה נשלחה.", type: "success" });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.error("שגיאה בשליחת הטופס:", error);
        showAlert({ show: true, text: "שגיאה בשליחת ההודעה.", type: "danger" });
      });
  };

  const onFocus = () => setCurrentAnimation("walk");
  const onBlur = () => setCurrentAnimation("idle");
  return (
    <section className="max-container relative flex h-[100vh] flex-col lg:flex-row">
      {alert.show && <Alert {...alert} />}
      <div className="min-[50%] flex-1 flex-col">
        <h1 className="head-text">צרו איתנו קשר</h1>
        <form className="mt-14 flex w-full flex-col gap-7" onSubmit={handleSubmit}>
          <label className="font-semibold text-black-500">
            שם מלא:
            <input
              type="text"
              name="name"
              className="input"
              placeholder="השם המלא..."
              value={form.name}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            דואר אלקטרוני:
            <input
              type="email"
              name="email"
              className="input"
              placeholder="דואר אלקטרוני..."
              value={form.email}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            ההודעה שלך...
            <textarea
              name="message"
              className="textarea"
              placeholder="אנא השאר הודעה ונחזור אלייך בהקדם..."
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
          <button
            disabled={isLoading}
            type="submit"
            className="btn"
            onFocus={onFocus}
            onBlur={onBlur}
          >
            {isLoading ? "בשליחה..." : "שלח הודעה עכשיו 🚀"}
          </button>
        </form>
      </div>
      <div className="h-[350px] w-full md:h-[550px] lg:h-auto lg:w-1/2">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
