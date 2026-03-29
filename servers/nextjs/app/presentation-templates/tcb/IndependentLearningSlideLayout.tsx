import * as z from "zod";

// Schema definition (updated to match HTML content)
export const Schema = z.object({
  estimatedTime: z
    .number()
    .default(5)
    .describe(
      "The estimated time (in minutes) for completing the independent learning activity.",
    ),
  steps: z
    .array(z.string())
    .min(2)
    .max(5)
    .default([
      "Open your workbook to page 42.",
      "Complete exercises A through D using the formula we just practiced.",
      "Circle your final answers in bright red pencil.",
      "When finished, swap with a shoulder partner for a quick peer-review!",
    ])
    .describe("A list of step-by-step instructions for the activity."),
  toolsNeeded: z
    .array(z.string())
    .min(1)
    .max(5)
    .default(["Pencil", "Workbook", "Ruler"])
    .describe("A list of tools needed for the activity."),
  proTip: z
    .string()
    .default("Double-check your carrying digits!")
    .describe("A helpful tip or reminder for students as they work."),
});

export const layoutId = "IndependentLearningSlideLayout";
export const layoutName = "Independent Learning Slide Layout";
export const layoutDescription =
  "Slide layout for presenting independent learning activities.";

const dynamicSlideLayout: React.FC<{
  data: Partial<z.infer<typeof Schema>>;
}> = ({ data }) => {
  // Extract schema-based fields with fallbacks to schema defaults
  const estimatedTime = data.estimatedTime;
  const steps = data.steps;
  const toolsNeeded = data.toolsNeeded;
  const proTip = data.proTip;

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
        <main className="bg-[#fbfaee] text-[#1b1c15] relative min-h-screen flex flex-col items-center justify-center p-12 overflow-hidden">
          {/* <!-- Header Section --> */}
          <div className="mb-12 flex flex-col items-center">
            <h1 className="font-[\'Plus_Jakarta_Sans\',_sans-serif] font-extrabold text-6xl text-[#006780] tracking-tight -rotate-1 m-0">
              Your Turn!
            </h1>
            <p className="font-[\'Handlee\',_cursive] text-[#a43c12] text-2xl mt-4 ml-2">
              Time to show what you've learned.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 items-start">
            {/* <!-- Main Task Area: Yellow Post-it --> */}
            <div className="col-span-2 relative">
              <div className="bg-[#ffe08c] p-10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] rotate-1 rounded-b-2xl min-h-[400px] relative z-20 transition-transform duration-300 [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-xl font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[#584400] uppercase tracking-tight m-0">
                    Instructions
                  </h2>
                </div>
                <div className="flex flex-col gap-6 font-['Handlee',_cursive] text-2xl text-[#584400] leading-[1.4]">
                  {steps?.map((step, idx) => (
                    <p key={idx}>{`${idx + 1}. ${step}`}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- Sidebar: Tools & Time (Patchwork Cards) --> */}
            <div className="flex flex-col gap-6">
              {/* <!-- Time Card --> */}
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(27,28,21,0.04)] border-2 border-[#c6c6c633] -rotate-2 transition-transform duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-headline font-bold text-primary">
                    Estimated Time
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[3rem] font-extrabold text-[#1b1c15]">
                    {estimatedTime}
                  </span>
                  <span className="text-xl font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-[#1b1c1599] pb-1">
                    minute{estimatedTime === 1 ? "" : "s"}
                  </span>
                </div>
              </div>
              {/* <!-- Tools Needed Card --> */}
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(27,28,21,0.04)] border-2 border-[#c6c6c633] rotate-1 transition-transform duration-200 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-headline font-bold text-tertiary">
                    Tools needed
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  {toolsNeeded?.map((tool, idx) => {
                    // Color logic for demo: cycle through 3 colors
                    const bgColors = [
                      "bg-[#ffdbcf]",
                      "bg-[#b7eaff]",
                      "bg-[#ffe08c]",
                    ];
                    const bg = bgColors[idx % bgColors.length];
                    return (
                      <li key={idx} className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${bg} rounded-md flex items-center justify-center`}
                        ></div>
                        <span className="font-['Be_Vietnam_Pro',_sans-serif] font-medium">
                          {tool}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <!-- Helper Tip Sticker --> */}
              <div className="mt-4 p-4 bg-[#006780] text-white rounded-xl shadow-[0_4px_16px_rgba(27,28,21,0.10)] rotate-3 cursor-pointer transition-transform duration-200">
                <div className="flex gap-3 items-center">
                  <div>
                    <p className="text-xs font-['Plus_Jakarta_Sans',_sans-serif] font-bold uppercase tracking-wider opacity-80 m-0">
                      Pro-Tip
                    </p>
                    <p className="text-sm font-['Be_Vietnam_Pro',_sans-serif] m-0">
                      {proTip}
                    </p>
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
