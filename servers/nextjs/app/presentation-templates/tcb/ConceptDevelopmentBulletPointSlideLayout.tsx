import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";

// Schema definition (updated to match HTML content)
export const Schema = z.object({
  mainQuestion: z
    .string()
    .min(5)
    .max(200)
    .default("How do we find the number of protons and neutrons?")
    .describe(
      "The main question or heading for the concept development slide.",
    ),
  image: ImageSchema.default({
    __image_url__:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    __image_prompt__:
      "Image describing the process defined in the main question, with a clean and educational style, suitable for a science presentation slide.",
  }).meta({
    description: "Image to display in the slide based on the main question.",
  }),
  steps: z
    .array(
      z.object({
        title: z.string().min(3).max(100),
        description: z.string().min(3).max(300),
        formula: z.string().optional(),
        color: z.string().optional(),
      }),
    )
    .min(1)
    .max(5)
    .default([
      {
        title: "Identify the Atomic Number",
        description:
          "This value is equal to the number of Protons in the nucleus.",
        color: "#006780",
      },
      {
        title: "Identify the Mass Number",
        description:
          "This represents the total sum of protons and neutrons combined.",
        color: "#006780",
      },
      {
        title: "Calculate Neutrons",
        description: "Subtract the Atomic Number from the Mass Number.",
        formula: "Mass # - Atomic # = Neutrons",
        color: "#a43c12",
      },
    ])
    .describe("The steps for the process."),
  polaroidCaption: z
    .string()
    .min(3)
    .max(100)
    .default("Carbon (C): Let's try it!")
    .describe("Caption for the polaroid image on the right."),
});

export const layoutId = "ConceptDevelopmentBulletPointsSlideLayout";
export const layoutName = "Concept Development Bullet Points Slide Layout";
export const layoutDescription =
  "Slide layout for presenting concept development with bullet points.";

const dynamicSlideLayout: React.FC<{
  data: Partial<z.infer<typeof Schema>>;
}> = ({ data }) => {
  // Extract schema-based fields with fallbacks to schema defaults
  const mainQuestion =
    data.mainQuestion || "How do we find the number of protons and neutrons?";
  const steps = data.steps;
  const polaroidCaption = data.polaroidCaption || "Carbon (C): Let's try it!";
  const image = data.image;

  return (
    <>
      <div className="aspect-video max-w-[1280px] w-full bg-white">
        {/* <!-- Main Content Area --> */}
        <main className="bg-[#fbfaee] text-[#1b1c15] relative min-h-screen flex flex-col items-center justify-center p-12 overflow-hidden">
          {/* <!-- Concept Title Section --> */}
          <header className="mb-16 max-w-4xl mx-auto text-center">
            <div className="inline-block relative mb-4">
              <span className="bg-[rgba(255,224,140,0.4)] px-6 py-2 rounded-full text-[#745b00] font-[\'Plus_Jakarta_Sans\',_sans-serif] font-bold uppercase tracking-wider text-sm -rotate-1 inline-block mb-4">
                Concept Development
              </span>
            </div>
            <h1 className="font-[\'Plus_Jakarta_Sans\',_sans-serif] font-extrabold text-5xl text-[#006780] leading-tight tracking-tight">
              {mainQuestion}
            </h1>
          </header>
          {/* <!-- Presentation Layout: Bento Style --> */}
          <div className="flex flex-row gap-12 items-start flex-grow">
            {/* <!-- Process & Steps (Left/Center) --> */}
            <div className="relative">
              {/* <!-- Washi Tape Accent --> */}
              <div
                className="washi-tape absolute -top-2 left-12 w-32 h-16 bg-[rgba(164,60,18,0.2)] z-20 -rotate-2"
                style={{
                  maskImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 100 20"><path d="M0 0 L5 2 L10 0 L15 3 L20 0 L25 2 L30 0 L35 4 L40 0 L45 2 L50 0 L55 3 L60 0 L65 2 L70 0 L75 4 L80 0 L85 2 L90 0 L95 3 L100 0 V20 L95 18 L90 20 L85 17 L80 20 L75 16 L70 20 L65 18 L60 20 L55 17 L50 20 L45 18 L40 20 L35 16 L30 20 L25 18 L20 20 L15 17 L10 20 L5 18 L0 20 Z" fill="black"/></svg>\')',
                  maskRepeat: "repeat-x",
                }}
              ></div>
              <div className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(27,28,21,0.06)] border border-[rgba(198,198,198,0.2)] relative">
                <h2 className="font-[\'Plus_Jakarta_Sans\',_sans-serif] font-bold text-2xl text-[#1b1c15] mb-8 flex items-center gap-3">
                  The Process
                </h2>
                <ul className="flex flex-col gap-8">
                  {steps?.map((step, idx) => {
                    // Tailwind color logic
                    const isSpecial = step.color === "#a43c12";
                    const circleBg = isSpecial
                      ? "bg-[#ffdbcf]"
                      : "bg-[#b7eaff]";
                    const circleColor = isSpecial
                      ? "text-[#822800]"
                      : "text-[#004e61]";
                    const titleColor = step.color
                      ? `text-[${step.color}]`
                      : "text-[#006780]";
                    return (
                      <li key={idx} className="flex items-start gap-6">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-xl flex-shrink-0 transition-transform duration-200 ${circleBg} ${circleColor}`}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <h3
                            className={`font-bold text-lg mb-1 ${titleColor}`}
                          >
                            {step.title}
                          </h3>
                          <p className="text-[#474747]">{step.description}</p>
                          {step.formula && (
                            <div className="mt-4 bg-[#f5f4e8] p-4 rounded-xl font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[#006780] italic border-l-4 border-[#006780]">
                              {step.formula}
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* <!-- Visual Aid Area (Right) --> */}
            {/* Polaroid Image Column */}
            <div className="col-span-1 flex justify-center items-center py-12">
              <div className="relative">
                {/* Taped Polaroid */}
                <div className="bg-white p-4 pb-16 shadow-[0_25px_50px_rgba(27,28,21,0.25)] rotate-3 border border-[#f1f5f9] transition-transform duration-500 relative">
                  {/* Tapes */}
                  <div
                    className="washi-tape absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-10 bg-[rgba(228,227,215,0.6)] z-10 opacity-60"
                    style={{
                      maskImage:
                        "url('data:image/svg+xml,%3Csvg width=100 height=20 viewBox=0 0 100 20 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 2 Q5 0 10 2 T20 2 T30 2 T40 2 T50 2 T60 2 T70 2 T80 2 T90 2 T100 2 L100 18 Q95 20 90 18 T80 18 T70 18 T60 18 T50 18 T40 18 T30 18 T20 18 T10 18 T0 18 Z\' fill=\'black\'/%3E%3C/svg%3E')",
                      maskSize: "cover",
                    }}
                  ></div>
                  <div
                    className="washi-tape absolute -bottom-4 right-4 w-16 h-8 bg-[rgba(183,234,255,0.4)] z-10 rotate-12"
                    style={{
                      maskImage:
                        "url('data:image/svg+xml,%3Csvg width=100 height=20 viewBox=0 0 100 20 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 2 Q5 0 10 2 T20 2 T30 2 T40 2 T50 2 T60 2 T70 2 T80 2 T90 2 T100 2 L100 18 Q95 20 90 18 T80 18 T70 18 T60 18 T50 18 T40 18 T30 18 T20 18 T10 18 T0 18 Z\' fill=\'black\'/%3E%3C/svg%3E')",
                      maskSize: "cover",
                    }}
                  ></div>
                  {/* Image Placeholder */}
                  <div className="w-80 h-80 bg-[#e2e8f0] overflow-hidden relative">
                    <img
                      src={image?.__image_url__}
                      alt={image?.__image_prompt__}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Caption area */}
                  <div className="mt-6 flex flex-col items-center gap-1">
                    <span className="font-[\'Be_Vietnam_Pro\',_sans-serif] text-base tracking-wide text-[#474747] font-medium">
                      {polaroidCaption}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default dynamicSlideLayout;
