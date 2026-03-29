import * as z from "zod";

// Schema definition
export const Schema = z.object({
  lessonTitle: z.string().min(3).max(80).default("Lesson Title"),
  yearLevel: z.number().default(7),
  subStrand: z.string().default("Subject sub-strand"),
});

export const layoutId = "IntroSlideLayout";
export const layoutName = "Intro Slide Layout";
export const layoutDescription =
  "Organic layered intro slide inspired by modern classroom themes.";

const dynamicSlideLayout: React.FC<{
  data: Partial<z.infer<typeof Schema>>;
}> = ({ data }) => {
  return (
    <div className="aspect-video max-w-[1280px] w-full bg-white">
      <main className="relative min-h-screen flex items-center justify-center p-12 overflow-hidden">
        {/* Main Slide Canvas */}
        <div className="relative w-full max-w-[80rem] aspect-[16/9] bg-[#f5f4e8] shadow-[10px_20px_60px_rgba(27,28,21,0.1)] rounded border-[4px] border-[rgba(228,227,215,0.3)] flex flex-col items-center justify-center p-12">
          {/* Central Content */}
          <div className="text-center z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-[\'Handlee\',_cursive] text-[1.5rem] text-[#a43c12] -rotate-2 mb-4">
                Welcome back, Class!
              </p>
              <div className="relative inline-block">
                <h1 className="font-[\'Plus_Jakarta_Sans\',_sans-serif] font-extrabold text-[6rem] text-[#006780] tracking-[-0.02em] leading-none italic shadow-sm">
                  {data.lessonTitle}
                </h1>
                {/* Hand-drawn highlighter effect */}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-[rgba(255,224,140,0.3)] z-[-10] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-6 pt-4">
              <div className="bg-white px-6 py-2 rounded-[1.5rem] shadow-sm rotate-1 flex items-center gap-2">
                <span className="font-[\'Be_Vietnam_Pro\',_sans-serif] font-bold text-[rgba(27,28,21,0.7)] uppercase tracking-wider text-xs">
                  Year {data.yearLevel}
                </span>
              </div>
              <div className="bg-white px-6 py-2 rounded-[1.5rem] shadow-sm -rotate-1 flex items-center gap-2 border-l-4 border-[#006780]">
                <span className="font-[\'Be_Vietnam_Pro\',_sans-serif] font-bold text-[rgba(27,28,21,0.7)] uppercase tracking-wider text-xs">
                  Substrand: {data.subStrand}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default dynamicSlideLayout;
