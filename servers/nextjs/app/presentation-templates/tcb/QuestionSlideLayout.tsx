import * as z from "zod";

// Schema definition (updated to match HTML content)
export const Schema = z.object({
  question: z
    .string()
    .default(
      "If the volume of a cylinder is doubled, what happens to its radius?",
    )
    .describe("The question to be presented to students."),
  possibleAnswers: z
    .array(z.string())
    .min(4)
    .max(4)
    .default([
      "The radius is doubled",
      "The radius increases by √2",
      "The radius remains the same",
      "It depends on the height",
    ])
    .describe("A list of possible answers for the question."),
});

export const layoutId = "QuestionSlideLayout";
export const layoutName = "Question Slide Layout";
export const layoutDescription =
  "Slide layout for presenting a question to students, to check in on their understanding.";

const dynamicSlideLayout: React.FC<{
  data: Partial<z.infer<typeof Schema>>;
}> = ({ data }) => {
  // Extract schema-based fields with fallbacks to schema defaults
  const question = data.question;
  const possibleAnswers = data.possibleAnswers;

  return (
    <>
      <div className="aspect-video max-w-[1280px] w-full bg-white">
        {/* Main Canvas */}
        <main className="bg-[#fbfaee] text-[#1b1c15] min-h-screen pt-20 pb-24 px-8 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Hinge Point Content */}
          <div className="max-w-4xl w-full flex flex-col items-center gap-12 text-center">
            {/* Question Sticker Container */}
            <div className="relative w-full">
              {/* Washi Tape Accent */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-2 w-40 h-8 bg-[#ffe08c] rounded-md opacity-80 shadow-sm z-20"></div>
              {/* Main Header Card */}
              <div className="bg-white p-12 rounded-xl shadow-[0_10px_30px_rgba(27,28,21,0.06)] -rotate-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#dbdbcf33] rounded-bl-2xl"></div>
                <span className="font-['Handlee',_cursive] text-[#a43c12] text-2xl block mb-4">
                  Time for a Check-In
                </span>
                <h1 className="font-['Plus_Jakarta_Sans',_sans-serif] font-black text-4xl text-[#006780] leading-[1.1] tracking-tight">
                  {question}
                </h1>
                <div className="mt-8 font-['Handlee',_cursive] text-[#745b00] opacity-60 text-lg">
                  Select the most accurate sticker below...
                </div>
              </div>
            </div>
            {/* Bento Grid of MC Options */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
              {possibleAnswers?.map((answer, idx) => {
                // Color and label logic for A/B/C/D
                const labels = ["A", "B", "C", "D"];
                const bgColors = [
                  "bg-[#006780]",
                  "bg-[#745b00]",
                  "bg-[#a43c12]",
                  "bg-[#004e61]",
                ];
                const fgColors = [
                  "text-white",
                  "text-white",
                  "text-white",
                  "text-[#b7eaff]",
                ];
                const rotations = [
                  "rotate-[3deg]",
                  "-rotate-2",
                  "rotate-[6deg]",
                  "-rotate-6",
                ];
                return (
                  <button
                    key={idx}
                    className={`relative flex items-center gap-6 text-left font-['Be_Vietnam_Pro',_sans-serif] font-bold text-lg transition-all duration-300 p-6 rounded-[60px] shadow-[0_2px_8px_rgba(27,28,21,0.04)] bg-white border-2 border-transparent`}
                  >
                    <div
                      className={`min-w-16 min-h-16 rounded-full flex items-center justify-center font-black text-3xl shadow-[0_2px_8px_rgba(27,28,21,0.10)] ${bgColors[idx]} ${fgColors[idx]} ${rotations[idx]}`}
                    >
                      {labels[idx]}
                    </div>
                    <span className="font-bold text-[#1b1c15] text-lg">
                      {answer}
                    </span>
                  </button>
                );
              })}
            </div>
            {/* "Post-it" Note Hint */}
            <div className="absolute right-[-4rem] top-1/2 -translate-y-1/2 rotate-12 hidden xl:block w-48 h-48 bg-[#ffdbcf] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-tl-xl rounded-bl-xl z-10">
              <div className="absolute top-0 right-0 w-8 h-8 bg-[rgba(0,0,0,0.05)]"></div>
              <p className="font-['Handlee',_cursive] text-[#822800] text-base leading-[1.3] m-0">
                Hint: Think about the formula V = πr²h. Is h constant?
              </p>
              <div className="mt-4 text-right">
                <span className="material-symbols-outlined text-[#a43c12] [font-variation-settings:'FILL'_1]">
                  lightbulb
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default dynamicSlideLayout;
