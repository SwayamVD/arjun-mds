import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Badge from "../../components/Badge";
import gallery1 from "../../assets/gallery/banner-holding.jpeg";
import gallery2 from "../../assets/gallery/guidelines.jpeg";
import gallery3 from "../../assets/gallery/teaching.jpeg";
import gallery4 from "../../assets/gallery/tools.jpeg";
import gallery5 from "../../assets/gallery/trafic-signs.jpeg";
import "./Gallery.css";

const translations = {
  en: {
    heading: "Gallery",
    items: [
      {
        id: 1,
        title: "Banner Awareness Campaign",
        description:
          "Promoting road safety awareness through public banner campaigns.",
      },
      {
        id: 2,
        title: "Driving Guidelines",
        description:
          "Displaying essential driving rules and safety guidelines for learners.",
      },
      {
        id: 3,
        title: "Practical Driving Training",
        description:
          "Hands-on driving instruction with real-world practical training.",
      },
      {
        id: 4,
        title: "Training Tools & Equipment",
        description:
          "Demonstrating the use of training tools and driving aids.",
      },
      {
        id: 5,
        title: "Traffic Signs Education",
        description:
          "Educating learners about important traffic signs and their meanings.",
      },
    ],
  },
  mr: {
    heading: "गॅलरी",
    items: [
      {
        id: 1,
        title: "प्रशिक्षकाचे शिकवण्याचे डेस्क",
        description:
          "एक व्यवस्थित डेस्क जिथे प्रशिक्षक चार्ट, ड्रायव्हिंग मॅन्युअल आणि वास्तविक रस्त्यावरील परिस्थितीच्या आकृत्या वापरून वाहतूक नियम समजावतात.",
      },
      {
        id: 2,
        title: "वाहतूक चिन्हे शिकण्याचा बोर्ड",
        description:
          "आवश्यक वाहतूक चिन्हे आणि रस्त्यावरील चिन्हांचे तपशीलवार प्रदर्शन जे सिद्धांत धड्यांदरम्यान वापरले जाते.",
      },
      {
        id: 3,
        title: "सिम्युलेशन सराव सेटअप",
        description:
          "एक व्यावहारिक प्रशिक्षण कोपरा जिथे विद्यार्थी स्टीयरिंग नियंत्रण तंत्र, पार्किंग प्रात्यक्षिके आणि संरक्षणात्मक ड्रायव्हिंग पद्धती पाहतात.",
      },
      {
        id: 4,
        title: "वैयक्तिक मार्गदर्शन",
        description:
          "प्रशिक्षक क्लच नियंत्रण, ब्रेकिंग अंतर आणि सुरक्षित लेन बदलण्याबद्दल वैयक्तिक स्पष्टीकरण देत आहेत.",
      },
      {
        id: 5,
        title: "विद्यार्थी प्रगती आणि प्रमाणपत्र",
        description:
          "विद्यार्थी प्रगती चार्ट, मॉक टेस्ट परिणाम आणि यशस्वी परवाना प्रमाणपत्रे प्रदर्शित करणारे क्षेत्र.",
      },
    ],
  },
};

const items = [
  { id: 1, image: gallery1, link: "#" },
  { id: 2, image: gallery2, link: "#" },
  { id: 3, image: gallery3, link: "#" },
  { id: 4, image: gallery4, link: "#" },
  { id: 5, image: gallery5, link: "#" },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { x: { velocity: 0 } },
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const captionVariants = {
  enter: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  center: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, clipPath: "inset(0 0 0 100%)" },
};

export default function Gallery({ lang }) {
  const t = translations[lang] || translations.en;
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (dir) => {
      const next = (current + dir + items.length) % items.length;
      setCurrent([next, dir]);
    },
    [current],
  );

  const item = items[current];
  const itemText = t.items[current];
  const next1 = items[(current + 1) % items.length];
  const next2 = items[(current + 2) % items.length];
  const next3 = items[(current + 3) % items.length];

  return (
    <section
      id="gallery"
      className="cus-section gallery section-bg2 page-wrapper"
      key={lang}
    >
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h1 className="section-title m-0">{t.heading}</h1>
          </div>

          <div className="d-flex gap-2">
            <div className="gallery-corousel-btn" onClick={() => paginate(-1)}>
              <Badge
                iconpath="https://www.svgrepo.com/show/510041/left-arrow.svg"
                color=""
              />
            </div>

            <div className="gallery-corousel-btn" onClick={() => paginate(1)}>
              <Badge
                iconpath="https://www.svgrepo.com/show/510165/right-arrow.svg"
                color=""
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="d-flex gap-2 overflow-hidden mb-3">
          {/* Featured */}
          <div
            className="flex-shrink-0 rounded overflow-hidden"
            style={{
              width: "70%",
              aspectRatio: "18/9",
              position: "relative",
            }}
          >
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.img
                key={item.id}
                src={item.image}
                alt={itemText.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 120, damping: 15 },
                  opacity: { duration: 0.7, ease: "easeInOut" },
                }}
                className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                }}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Peek cards */}
          <div className="d-flex gap-2 flex-grow-1 overflow-hidden">
            {[next1, next2, next3].map((peek, i) => (
              <div
                key={`${peek.id}-${i}`}
                className="flex-shrink-0 rounded overflow-hidden position-relative"
                style={{
                  width: "calc(33.333% - 0.3rem)",
                  aspectRatio: "18/8",
                  opacity: 1 - i * 0.18,
                  cursor: "pointer",
                }}
                onClick={() => paginate(+1)}
              >
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img
                    key={`peek-${peek.id}-${i}`}
                    src={peek.image}
                    alt={t.items[(current + i + 1) % items.length].title}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 120, damping: 15 },
                      opacity: {
                        duration: 0.45,
                        ease: "easeInOut",
                        delay: i * 0.06,
                      },
                    }}
                    className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                    style={{
                      willChange: "transform, opacity",
                      backfaceVisibility: "hidden",
                    }}
                    draggable={false}
                  />
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="mb-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              variants={captionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <p className="text-muted small mb-0">
                <strong className="text-body">{itemText.title}.</strong>{" "}
                {itemText.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
