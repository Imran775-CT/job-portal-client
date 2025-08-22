import { easeOut, motion } from "motion/react"
import bnr from '../../assets/team/team2.jpg'
import bnr2 from '../../assets/team/team1.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-96 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          {" "}
          <motion.img
            animate={{y: [50,100, 50], }}
            transition={{duration: 5, repeat: Infinity}}
            src={bnr}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px]  border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            animate={{x: [50,100, 50], }}
            transition={{duration: 5, delay:5, repeat: Infinity}}
            src={bnr2}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px]  border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
          animate={{x:50, color:['red']}}
          transition={{duration: 2, delay: 1, ease: easeOut, repeat: Infinity}}
          className="text-5xl font-bold">Latest <motion.span
          animate={{color:['#27F549','#F5F227','#2746F5']}}
          transition={{duration: 1.5, repeat: Infinity }}
          >Job</motion.span> for you!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
