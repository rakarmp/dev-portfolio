import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Raka
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Web Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Saya adalah seorang junior web developer fresh graduate yang memiliki
        semangat tinggi untuk terus belajar dan berkembang di bidang
        pengembangan web. Saya sangat tekun dan tepat waktu dalam menyelesaikan
        proyek yang saya kerjakan.
        <br />
        Saya sering mengasah skill saya dari tutorial Youtube dan media lainnya,
        Dan juga saya sudah terbiasa dengan Git untuk version control dalam
        mengerjakan suatu project.
      </p>
    </div>
  );
}

export default Intro;
