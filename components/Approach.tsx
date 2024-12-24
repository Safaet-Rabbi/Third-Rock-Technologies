import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        <span className="text-purple">Our Approaches</span>
      </h1>

      {/* First row for Phase 1, 2, 3 */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Innovation-First Mindset"
          icon={<AceternityIcon order="Phase 1" />}
          des="Innovation-First Mindset: Bringing creative solutions and cutting-edge technology to build scalable and robust solutions tailored for startups."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="Agile Development"
          icon={<AceternityIcon order="Phase 2" />}
          des="Embracing the agile methodology to ensure flexibility, speed, and continuous improvement in every project phase."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="User-Centric Design"
          icon={<AceternityIcon order="Phase 3" />}
          des="Prioritizing sleek and intuitive designs that engage your users and deliver an exceptional experience."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

      {/* New row for Phase 4, 5, and 6 with unique colors */}
      <div className="my-20 flex flex-wrap justify-center gap-4 w-full">
        <Card
          title="Scalability and Performance"
          icon={<AceternityIcon order="Phase 4" />}
          des="Leveraging the latest tools and technologies like Next.js to ensure your site is fast, scalable, and ready to grow with your business."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl overflow-hidden"
            colors={[
              [37, 99, 235],
              [79, 70, 229],
            ]}
          />
        </Card>

        <Card
          title="Data-Driven Insights"
          icon={<AceternityIcon order="Phase 5" />}
          des="Integrating robust analytics and reporting tools to provide actionable insights that drive smarter decision-making and measurable growth."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl overflow-hidden"
            colors={[
              [0, 128, 0],
              [26, 210, 162],
            ]}
          />
        </Card>

        <Card
          title="Transparent Communication"
          icon={<AceternityIcon order="Phase 6" />}
          des="Collaborating closely with clients at every step, ensuring transparency, trust, and clear milestones."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl overflow-hidden"
            colors={[
              [128, 0, 128],
              [255, 20, 147],
            ]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ scale: 1 }}
      animate={{ scale: hovered ? 1.05 : 1 }}
      transition={{ duration: 0.3 }}
      className="relative border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl bg-gradient-to-r 
       from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        initial={{ opacity: 0, borderWidth: "1px" }}
        animate={{
          opacity: hovered ? 1 : 0,
          borderWidth: hovered ? "3px" : "1px",
          borderColor: hovered ? "rgb(125, 211, 252)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Card Content */}
      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
      {hovered && (
        <motion.div className="h-full w-full absolute inset-0">
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};
