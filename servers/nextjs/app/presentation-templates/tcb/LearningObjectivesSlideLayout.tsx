import * as z from "zod";

export const layoutId = "LearningObjectivesSlideLayout";
export const layoutName = "Learning Objectives Slide Layout";
export const layoutDescription =
  "Slide layout for presenting learning objectives.";

// Schema definition
export const Schema = z.object({
  lessonObjectivesDescription: z
    .string()
    .min(0)
    .max(300)
    .default(
      "Brief description or context for the learning objectives. Keep it concise and engaging.",
    ),
  postit: z
    .string()
    .min(0)
    .max(200)
    .default("Remember: Learning is a journey, not a destination!"),
  items: z
    .array(z.string().min(3).max(100).default("Learning objective"))
    .min(2)
    .max(5)
    .default([
      "Understand the core components of the system.",
      "Analyze the interactions between variables.",
      "Synthesize findings into a visual summary.",
    ]),
});

const dynamicSlideLayout: React.FC<{
  data: Partial<z.infer<typeof Schema>>;
}> = ({ data }) => {
  const items = data.items || [];
  const postit = data.postit || "";
  const lessonObjectivesDescription = data.lessonObjectivesDescription || "";

  return (
    <>
      <div className="aspect-video max-w-[1280px] w-full bg-white">
        <main className="bg-[#fbfaee] text-[#1b1c15]  relative min-h-screen flex items-center justify-center p-12 overflow-hidden gap-8">
          {/* <!-- Left Column: Title & Intro --> */}
          <div className="col-span-12 flex flex-col gap-6">
            <div className="relative inline-block -rotate-1 self-start mb-4">
              <div
                className="washi-tape absolute -top-4 -left-4 w-24 h-8 bg-[rgba(255,224,140,0.6)] z-10 -rotate-[15deg]"
                style={{
                  maskImage:
                    "url('data:image/svg+xml,%3Csvg width=200 height=40 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 L 200 30 Q 175 40 150 30 T 100 30 T 50 30 T 0 30 Z\' fill=\'black\'/%3E%3C/svg%3E')",
                  maskSize: "cover",
                }}
              ></div>
              <h1 className="text-6xl font-[\'Plus_Jakarta_Sans\',_sans-serif] font-extrabold text-[#006780] tracking-tight leading-none relative z-20">
                Learning Objectives
              </h1>
              <div className="absolute -bottom-2 right-0 w-32 h-1 bg-[#ffdbcf]"></div>
            </div>
            <p className="text-xl font-['Be_Vietnam_Pro',_sans-serif] text-[#474747] max-w-[28rem] leading-[1.6]">
              {lessonObjectivesDescription}
            </p>
            {/* <!-- Decorative Sticker Stack --> */}
            <div className="mt-8 flex gap-4 items-end relative">
              <div className="absolute -bottom-8 left-32 font-['Handlee',_cursive] text-[#a43c12] text-2xl -rotate-[12deg]">
                Adventure awaits!
              </div>
            </div>
          </div>
          {/* <!-- Right Column: Objectives List (The Lined Paper Scrap) --> */}
          <div className="col-span-12 relative pt-12 flex-1">
            {/* <!-- Paper Background with Tonal Layering --> */}
            <div className="bg-[#f5f4e8] rounded-2xl p-1 shadow-[10px_10px_30px_rgba(27,28,21,0.06)] rotate-1">
              <div className="bg-white rounded-xl p-8 relative overflow-hidden min-h-[500px]">
                {/* <!-- Lined Paper Texture --> */}
                <div className="lined-paper absolute inset-0 pointer-events-none opacity-40 z-0 [background-image:repeating-linear-gradient(#f5f4e8_0,#f5f4e8_31px,#c6c6c6_32px)] [background-size:100%_32px]"></div>
                {/* <!-- Red Margin Line --> */}
                <div className="absolute left-16 top-0 bottom-0 w-[2px] bg-[rgba(186,26,26,0.125)] z-0"></div>
                <div className="relative z-10">
                  <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-3xl font-bold text-[#745b00] mb-12 flex items-center gap-4">
                    Today's Path
                  </h2>
                  <ul className="flex flex-col gap-8">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-6">
                        <div className="mt-1 w-10 h-10 bg-[rgba(255,224,140,0.4)] rounded-full flex items-center justify-center transition-colors duration-200">
                          <span className="material-symbols-outlined text-[#745b00] font-bold">
                            -
                          </span>
                        </div>
                        <div>
                          <p className="font-['Be_Vietnam_Pro',_sans-serif] text-[#474747] leading-[1.2] font-medium">
                            {item}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* <!-- Handwritten Note Sticker --> */}
                  <div className="mt-16 -mr-4 self-end rotate-2">
                    <div className="bg-[#ffe08c] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] max-w-[200px] ml-auto rounded-b-xl [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">
                      <p className="font-['Handlee',_cursive] text-[#241a00] text-lg leading-[1.2]">
                        {postit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-6 w-32 h-32 z-30">
              <img
                alt="Magnifying glass sticker"
                className="w-full h-full [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.15))] -rotate-[12deg]"
                data-alt="a whimsical 3D style magnifying glass sticker with a soft blue lens and golden frame"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq3xlDYW5vTRggw3xI4iJ_rSeA_JPOMw_SdPvnW7kA2jDLKwfm2imebeFnE2WME-xsFYu-kEDocam_RwVVmeVH3BSBRdXZeLHwis5jm4cJMWf9V4-mTP_7EejdLUlSU8NSbGlhgvbFw6bm65RMVod6UaIg8wXNssvIieLIHL1ak6RPqpNoJu1W9jAIY6-Aeo4oxN7P9JH8vvnI41wKwXVa2ft8uDCiLVVpkWniNp6lcPi9vNVJa6eM6FDAo7ScePKBTo9smZT0240U"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default dynamicSlideLayout;
