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
  description: z
    .string()
    .min(10)
    .max(500)
    .default(
      "To find the number of protons and neutrons in an atom, we can use the atomic number and atomic mass. The atomic number gives us the number of protons, while the atomic mass minus the atomic number gives us the number of neutrons.",
    )
    .describe(
      "A detailed description or explanation related to the main question.",
    ),
  polaroidCaption: z
    .string()
    .min(3)
    .max(100)
    .default("Carbon (C): Let's try it!")
    .describe("Caption for the polaroid image on the right."),
});

export const layoutId = "ConceptDevelopmentDescriptionSlideLayout";
export const layoutName = "Concept Development Description Slide Layout";
export const layoutDescription =
  "Slide layout for presenting concept development with description.";

const dynamicSlideLayout: React.FC<{
  data: Partial<z.infer<typeof Schema>>;
}> = ({ data }) => {
  // Extract schema-based fields with fallbacks to schema defaults
  const mainQuestion =
    data.mainQuestion || "How do we find the number of protons and neutrons?";
  const description =
    data.description ||
    "To find the number of protons and neutrons in an atom, we can use the atomic number and atomic mass. The atomic number gives us the number of protons, while the atomic mass minus the atomic number gives us the number of neutrons.";
  const image = data.image;
  const polaroidCaption = data.polaroidCaption || "Carbon (C): Let's try it!";

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;0,800;1,800&amp;family=Be+Vietnam+Pro:wght@400;500;700;900&amp;family=Handlee&amp;display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet"
      />

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
              <div className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(27,28,21,0.06)] border border-[rgba(198,198,198,0.2)] relative max-w-lg">
                <h2 className="font-[\'Plus_Jakarta_Sans\',_sans-serif] font-bold text-2xl text-[#1b1c15] mb-8 flex items-center gap-3">
                  The Process
                </h2>
                <p className="text-[1.525rem] leading-[1.6] text-[#474747]">
                  {description}
                </p>
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
