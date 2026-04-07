import "./About.css";
import Badge from "../../components/Badge";

const translations = {
  en: {
    name: "AMOL MOJAD",
    description: `I am committed to helping learners become safe, confident, and responsible drivers. With years of experience and a practical teaching approach, I focus on real-road skills, traffic awareness, and personal guidance to ensure every student feels comfortable behind the wheel. My goal is to make driving easy, stress-free, and accessible for everyone.`,
    specialize:
      "I specialize in the following driving and licence-related services.",
    badges: ["Training", "Licence Assistance", "All RTO Paper Clearance"],
  },

  mr: {
    name: "अमोल मोजाड",
    description: `मी विद्यार्थ्यांना सुरक्षित, आत्मविश्वासपूर्ण आणि जबाबदार चालक बनवण्यासाठी कटिबद्ध आहे. अनेक वर्षांच्या अनुभवासह आणि व्यावहारिक शिकवण्याच्या पद्धतीद्वारे, मी प्रत्यक्ष रस्त्यावरचे कौशल्य, वाहतूक जागरूकता आणि वैयक्तिक मार्गदर्शन यावर लक्ष केंद्रित करतो, जेणेकरून प्रत्येक विद्यार्थी आत्मविश्वासाने वाहन चालवू शकेल. माझे ध्येय वाहन चालवणे सोपे, तणावरहित आणि सर्वांसाठी सुलभ बनवणे आहे.`,
    specialize:
      "मी खालील ड्रायव्हिंग आणि परवाना संबंधित सेवांमध्ये विशेष प्राविण्य मिळवले आहे.",
    badges: ["प्रशिक्षण", "परवाना सहाय्य", "सर्व RTO कागदपत्रांची पूर्तता"],
  },
};

export default function About({ lang }) {
  const t = translations[lang] || translations.en;

  return (
    <section id="about" className={`cus-section section-bg2 ${lang}`}>
      <div className="container">
        <div className="row d-flex justify-content-between hover-parent">
          <div className="col-12 col-md-5 page-wrapper" key={lang}>
            <h1 className="instructor-name highlight-underline">{t.name}</h1>

            <p className="instructor-description">{t.description}</p>

            <div className="instructor-spec d-flex flex-wrap gap-3">
              <span>{t.specialize}</span>

              {t.badges.map((text, index) => (
                <div className="d-flex align-items-center gap-2" key={index}>
                  <Badge
                    iconpath="https://www.svgrepo.com/show/379965/check-good-yes.svg"
                    color=""
                  />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="baseofimage">
              <div className="childimage">
                <img
                  src="/images/instructor1.png"
                  alt="shop image"
                  className="img-fluid"
                />
              </div>
              <div className="childimage-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
