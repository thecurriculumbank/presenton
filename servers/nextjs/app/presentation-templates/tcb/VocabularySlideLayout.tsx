import * as z from "zod";
import { ImageSchema } from "../defaultSchemes";

// Schema definition
export const Schema = z.object({
  vocabularyWord: z
    .string()
    .min(1)
    .max(50)
    .default("Effervescent")
    .describe(
      "The vocabulary word being presented. Keep it concise and impactful.",
    ),
  definition: z
    .string()
    .min(1)
    .max(300)
    .default(
      "(adj.) Vivacious and enthusiastic; or (of a liquid) giving off bubbles; fizzy.",
    )
    .describe(
      "The definition of the vocabulary word. Should be clear and concise, ideally one or two sentences.",
    ),
  exampleSentence: z
    .string()
    .min(1)
    .max(300)
    .default(
      "Her effervescent personality made everyone at the party feel welcome and excited.",
    )
    .describe(
      "An example sentence using the vocabulary word. Should be clear and illustrative.",
    ),
  image: ImageSchema.default({
    __image_url__:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    __image_prompt__:
      "Image of the word in action or a visual representation of the word's meaning",
  }).meta({
    description: "Image to display in the slide based on the vocabulary word",
  }),
});

export const layoutId = "VocabularySlideLayout";
export const layoutName = "Vocabulary Slide Layout";
export const layoutDescription = "Slide layout for presenting vocabulary.";

const dynamicSlideLayout: React.FC<{
  data: Partial<z.infer<typeof Schema>>;
}> = ({ data }) => {
  const vocabularyWord = data.vocabularyWord || "";
  const definition = data.definition || "";
  const exampleSentence = data.exampleSentence || "";
  const image = data.image;

  return (
    <>
      <div className="aspect-video max-w-[1280px] w-full bg-white">
        {/* Main Content Area (Fullscreen Presentation Slide) */}
        <main className="bg-[#fbfaee] text-[#1b1c15] relative min-h-screen flex items-center justify-center p-12 overflow-hidden">
          {/* The Vocabulary Content */}
          <div className="w-full flex gap-12 items-center justify-center">
            {/* Word & Definition Column */}
            <div className="flex flex-col gap-8">
              {/* Word Title */}
              <div className="relative inline-block">
                <span className="absolute -top-6 -left-4 bg-[#a43c12] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide -rotate-2 shadow-sm">
                  Vocabulary
                </span>
                <h1 className="text-[6rem] font-['Plus_Jakarta_Sans',_sans-serif] font-black text-[#006780] tracking-[-0.04em] leading-none mb-2">
                  {vocabularyWord}
                </h1>
                <div className="h-4 w-full bg-[rgba(255,224,140,0.4)] [mask-image:url('data:image/svg+xml,%3Csvg_width=100_height=20_viewBox=0_0_100_20_xmlns=http://www.w3.org/2000/svg%3E%3Cpath_d=M0_2_Q5_0_10_2_T20_2_T30_2_T40_2_T50_2_T60_2_T70_2_T80_2_T90_2_T100_2_L100_18_Q95_20_90_18_T80_18_T70_18_T60_18_T50_18_T40_18_T30_18_T20_18_T10_18_T0_18_Z_fill=black/%3E%3C/svg%3E')] [mask-size:cover] -mt-6 ml-4 washi-tape"></div>
              </div>
              {/* Definition Card (Paper Sheet) */}
              <div className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(27,28,21,0.06)] relative border border-[rgba(198,198,198,0.2)] rotate-1">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[rgba(116,91,0,0.2)] [mask-image:url('data:image/svg+xml,%3Csvg_width=100_height=20_viewBox=0_0_100_20_xmlns=http://www.w3.org/2000/svg%3E%3Cpath_d=M0_2_Q5_0_10_2_T20_2_T30_2_T40_2_T50_2_T60_2_T70_2_T80_2_T90_2_T100_2_L100_18_Q95_20_90_18_T80_18_T70_18_T60_18_T50_18_T40_18_T30_18_T20_18_T10_18_T0_18_Z_fill=black/%3E%3C/svg%3E')] [mask-size:cover] opacity-80 washi-tape"></div>
                <h2 className="text-[#006780] font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">description</span>
                  Definition
                </h2>
                <p className="font-['Handlee',_cursive] text-2xl text-[#474747] leading-[1.4]">
                  {definition}
                </p>
                {/* Example Note (Post-it Style) */}
                <div className="mt-8 bg-[#ffe08c] p-6 rounded-t-xl rounded-bl-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-w-2/3 self-end -rotate-1 ml-auto relative">
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-[rgba(88,68,0,0.1)] rounded-tl-full"></div>
                  <h3 className="text-[#584400] font-bold text-sm uppercase tracking-wide mb-2">
                    Example Sentence
                  </h3>
                  <p className="font-['Handlee',_cursive] text-xl text-[rgba(88,68,0,0.9)]">
                    {exampleSentence}
                  </p>
                </div>
              </div>
            </div>
            {/* Polaroid Image Column */}
            <div className="flex justify-center items-center py-12">
              <div className="relative">
                {/* Taped Polaroid */}
                <div className="bg-white p-4 pb-16 shadow-[0_25px_50px_rgba(27,28,21,0.25)] rotate-3 border border-[#f1f5f9] transition-transform duration-500 relative">
                  {/* Tapes */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-10 bg-[rgba(228,227,215,0.6)] z-10 opacity-60 [mask-image:url('data:image/svg+xml,%3Csvg_width=100_height=20_viewBox=0_0_100_20_xmlns=http://www.w3.org/2000/svg%3E%3Cpath_d=M0_2_Q5_0_10_2_T20_2_T30_2_T40_2_T50_2_T60_2_T70_2_T80_2_T90_2_T100_2_L100_18_Q95_20_90_18_T80_18_T70_18_T60_18_T50_18_T40_18_T30_18_T20_18_T10_18_T0_18_Z_fill=black/%3E%3C/svg%3E')] [mask-size:cover]"></div>
                  <div className="absolute -bottom-4 right-4 w-16 h-8 bg-[rgba(183,234,255,0.4)] z-10 rotate-12 [mask-image:url('data:image/svg+xml,%3Csvg_width=100_height=20_viewBox=0_0_100_20_xmlns=http://www.w3.org/2000/svg%3E%3Cpath_d=M0_2_Q5_0_10_2_T20_2_T30_2_T40_2_T50_2_T60_2_T70_2_T80_2_T90_2_T100_2_L100_18_Q95_20_90_18_T80_18_T70_18_T60_18_T50_18_T40_18_T30_18_T20_18_T10_18_T0_18_Z_fill=black/%3E%3C/svg%3E')] [mask-size:cover]"></div>
                  {/* Image Placeholder */}
                  <div className="w-80 h-80 bg-[#e2e8f0] overflow-hidden relative">
                    <img
                      src={image?.__image_url__}
                      alt={image?.__image_prompt__}
                      className="w-full h-full object-cover [filter:grayscale(20%)_sepia(10%)_contrast(1.1)]"
                    />
                  </div>
                  {/* Caption area */}
                  <div className="mt-6 flex flex-col items-center gap-1">
                    <span className="font-['Be_Vietnam_Pro',_sans-serif] text-[10px] uppercase tracking-wide text-[#cbd5e1] font-medium">
                      Fig. 01 — Visual Aid
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Decorative Washi Tape Corner */}
        <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none z-0 overflow-hidden">
          <div className="w-40 h-10 bg-[rgba(255,219,207,0.3)] [mask-image:url('data:image/svg+xml,%3Csvg_width=100_height=20_viewBox=0_0_100_20_xmlns=http://www.w3.org/2000/svg%3E%3Cpath_d=M0_2_Q5_0_10_2_T20_2_T30_2_T40_2_T50_2_T60_2_T70_2_T80_2_T90_2_T100_2_L100_18_Q95_20_90_18_T80_18_T70_18_T60_18_T50_18_T40_18_T30_18_T20_18_T10_18_T0_18_Z_fill=black/%3E%3C/svg%3E')] [mask-size:cover] rotate-45 absolute -right-10 -top-2 opacity-60 washi-tape"></div>
        </div>
      </div>
    </>
  );
};

export default dynamicSlideLayout;
