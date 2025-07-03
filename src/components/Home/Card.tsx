import React, { forwardRef, useEffect } from "react";
import gsap from "gsap";
type CardProps = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  gradientIcon: string;
  textColorHover: string;
  shadow: string;
};
const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ title, description, Icon, gradientIcon, textColorHover, shadow }, ref) => {
      useEffect(() => {
            const ctx = gsap.context(() => {
                gsap.to(".floating-icon", {
                    y: -10,
                    duration: 2,
                    ease: "power2.inOut",
                    yoyo: true,
                    repeat: -1,
                    stagger: 0.3,
                  })
            })
            return () => ctx.revert()
      },[])
    return (
      <div
        ref={ref}
        className={`opacity-0 group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${shadow}`}
      >
        <div className="p-8 text-center">
          <div
            className={`floating-icon mb-6 mx-auto w-20 h-20 bg-gradient-to-r ${gradientIcon} rounded-full flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>{" "}
          <h3
            className={`text-2xl font-bold text-white mb-4 ${textColorHover} transition-colors duration-300`}
          >
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed">{description} </p>
        </div>
      </div>
    );
  }
);
export default Card;
