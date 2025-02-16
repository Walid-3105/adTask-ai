import "./Banner.css";
import { cn } from "@/lib/utils";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export default function Banner() {
  return (
    <div className="relative shadow min-h-svh flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 h-96">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0",
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "skew-y-12"
          )}
        />
      </div>

      {/* Gradient Triangle */}
      <div className="absolute inset-0 mix-blend-plus-lighter triangle-wrapper mx-auto triangle"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 w-full">
        {/* Move the span to the top */}
        <span className="relative top-0 transform -translate-x-1/2 uppercase text-sm tracking-wide bg-gray-800 px-5 py-3 rounded-full">
          AI Development Partner
        </span>

        <h1 className="text-8xl font-semibold mt-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-200 animate-fade-in hover:brightness-200 hover:animate-glow transition duration-300">
          AdTask.ai
        </h1>

        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Stop struggling with marketing decisions. Our AI assistant analyzes
          your business, creates personalized strategies, and helps you execute
          them - all in real-time.
        </p>

        <ShimmerButton className="shadow-2xl bg-gray-800 mx-auto flex mt-6">
          <span className="whitespace-pre-wrap text-center text-sm dark:from-white dark:to-slate-900/10 font-medium leading-none tracking-tight text-white lg:text-lg">
            Try Now for Free
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
}
