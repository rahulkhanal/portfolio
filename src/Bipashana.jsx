import { useState } from "react";

const Stages = {
  stageNo: "stageNo",
  stageYes: "stageYes",
  unhappy: "unhappy",
};

const noTextsArr = [
  "No",
  "Are you sure?",
  "Really?",
  "Are you positive?",
  "Just think about it",
  "If you say no, I'll be very sad",
  "I'll be very sad",
  "I'll be very very very sad",
  "Ok fine, I'll stop asking...",
  "Just kidding, PLEASE SAY YES",
  "You're breaking my heart ;(",
  "No",
];

export default function Valentine() {
  const [stage, setStage] = useState(Stages.stageNo);
  const [counter, setCounter] = useState(0);

  const changeNoText = () => {
    setCounter((prevState) => {
      if (prevState < noTextsArr.length - 1) {
        return prevState + 1;
      } else {
        setStage(Stages.unhappy);
        return 0;
      }
    });
  };

  return (
    <section className="valentine-box select-none">
      {stage === Stages.stageNo && (
        <>
          <div className="text-center">
            <img
              className="mx-auto"
              src="/valentine-bear.gif"
              alt="valentine bear | valentine"
              width={250}
              height={250}
            />
          </div>
          <div className="text-2xl mt-2 text-gray-900 text-center">
            Will you be my Valentine?
          </div>
          <div className="flex items-center justify-center mt-3 text-center">
            <button
              className="bg-green-500 text-white rounded me-2 py-1 px-2"
              style={{ fontSize: counter ? `${(counter + 1) * 15}px` : "18px" }}
              onClick={() => setStage(Stages.stageYes)}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white rounded ms-2 py-1 px-2 text-[18px]"
              onClick={changeNoText}
            >
              {noTextsArr[counter]}
            </button>
          </div>
        </>
      )}
      {stage === Stages.stageYes && (
        <>
          <img
            src="/bear-kiss-bear-kisses.gif"
            alt="valentine kiss | valentine"
            width={250}
            height={250}
          />
          <div className="text-center text-2xl mt-2 text-gray-900">
            {"Yay! Now I'm happy!"}
          </div>
        </>
      )}
      {stage === Stages.unhappy && (
        <>
          <img
            src="/unhappy-bear.gif"
            alt="valentine sad | valentine"
            width={250}
            height={250}
          />
          <div className="text-center text-2xl mt-2 text-gray-900">
            {"OK! Bye... you may live long. I'll miss you... Hope you'll find someone else. but remember he might not be as nice as me."}
          </div>
        </>
      )}
    </section>
  );
}
