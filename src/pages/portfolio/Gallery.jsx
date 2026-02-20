import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Badge from "../../components/Badge";
import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../../assets/gallery-2.jpg";
import gallery3 from "../../assets/gallery-3.jpg";
import gallery4 from "../../assets/gallery-4.jpg";
import gallery5 from "../../assets/gallery-5.jpg";
import "./Gallery.css";
const items = [
  {
    id: 1,
    image: gallery1,
    title: "Instructor’s Teaching Desk",
    description:
      "A neatly organized desk where the instructor explains traffic rules using charts, driving manuals, and real road scenario diagrams to help students understand road safety fundamentals.",
    link: "#",
  },
  {
    id: 2,
    image: gallery2,
    title: "Traffic Signs Learning Board",
    description:
      "A detailed wall display of essential traffic signs and road symbols used during theory lessons to ensure students confidently recognize every signal on the road.",
    link: "#",
  },
  {
    id: 3,
    image: gallery3,
    title: "Simulation Practice Setup",
    description:
      "A practical training corner where students observe steering control techniques, parking demonstrations, and defensive driving methods before heading onto real roads.",
    link: "#",
  },
  {
    id: 4,
    image: gallery4,
    title: "One-on-One Guidance",
    description:
      "The instructor providing personalized explanations about clutch control, braking distance, and safe lane changing to ensure each student builds confidence behind the wheel.",
    link: "#",
  },
  {
    id: 5,
    image: gallery5,
    title: "Student Progress & Certification",
    description:
      "A display area showcasing student progress charts, mock test results, and successful license certifications achieved through structured training and disciplined practice.",
    link: "#",
  },
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

// const captionVariants = {
//   enter: { opacity: 0, y: 12 },
//   center: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -12 },
// };

const captionVariants = {
  enter: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  center: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, clipPath: "inset(0 0 0 100%)" },
};

export default function Gallery() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (dir) => {
      const next = (current + dir + items.length) % items.length;
      setCurrent([next, dir]);
    },
    [current],
  );

  const item = items[current];
  const next1 = items[(current + 1) % items.length];
  const next2 = items[(current + 2) % items.length];
  const next3 = items[(current + 3) % items.length];

  return (
    <section id="gallery" className="cus-section gallery section-bg2">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <a
              href="#gallery"
              className="display-6 text-decoration-none text-dark"
            >
              Gallery
            </a>
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
                alt={item.title}
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
                    alt={peek.title}
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
                <strong className="text-body">{item.title}.</strong>{" "}
                {item.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
