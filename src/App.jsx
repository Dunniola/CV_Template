import React from "react";

function App() {
  return (
    <>
      <Helmet>
        
    {/* SEO tags */}
        <meta name="author" content="Edu Zainab oladunni" />

        <meta name="title" content="Edu Zainab | Professional CV"/>
        <meta
          name="description"
          content="Edu Zainab Oladunni is a Junior Frontend Developer and Biochemistry graduate. Skilled in HTML, CSS, JavaScript, React, Tailwind CSS, and building accessible and responsive web experiences."
        />
        <meta
          name="keywords"
          content="Edu Zainab Oladunni, Tailwind CSS, React, Web Developer, Frontend Developer, Biochemist, Lagos, HTML, CSS, JavaScript "
        />
      {/* OG tags */}
      <meta
          property="og:title"
          content="Edu Zainab Oladunni | Frontend Developer & Biochemist"
        />
        <meta
          property="og:description"
          content="Online CV and portfolio of Edu Zainab Oladunni — Junior Frontend Developer based in Lagos, Nigeria."
        />
        
       

        {/* content */}

        <div className=" grid place-content-center items-center min-h-screen text-[0.9rem] overflow-x-hidden bg-white p-6">
          <div className="border-2 px-10 py-6 w-full max-w-3xl">
            <hr className="my-8" />

            <section className="leading-5">
              <h1 className="my-3 text-2xl font-bold">Edu Zainab Oladunni</h1>
              <span className="text-green-400 font-semibold">
                Junior Frontend Developer
              </span>
              <p className="mt-2">
                3, Onileniwura Street Alafia, Orile, Iganmu Lagos
              </p>
              <p>Lagos</p>
              <p>+234 7056870840</p>
              <p>oladunniedu611@gmail.com</p>
            </section>

            <section className="my-3">
              <h2 className="text-green-400 font-semibold">Skills</h2>
              <p>
                HTML, CSS, JavaScript, Accessibility, Figma to Design,
                Responsive Web Design, Technical Writing, Presentation.
              </p>
            </section>

            <section className="my-3">
              <h2 className="text-green-400 font-semibold">Education</h2>
              <p>Lagos State University - BSc</p>
            </section>

            <section>
              <h2 className="text-green-400 font-semibold">Qualification</h2>
              <p>B.S.C Biochemistry</p>
            </section>

            <section className="my-3">
              <h2 className="text-green-400 font-semibold">Experience</h2>

              <div className="mb-5">
                <p className="my-1 italic font-semibold">
                  Access links properties LTD Alagomeji yaba
                </p>
                <h3 className="font-semibold">ADMINISTRATIVE ASSISTANT</h3>
                <ul className="list-disc list-inside mx-4">
                  <li>Answer phones and greet visitors </li>
                  <li>
                    Prepare communications, such as memos, emails, invoices,
                    reports and other correspondence.
                  </li>
                  <li>
                    Write and edit documents from letters to reports and
                    instructional documents
                  </li>
                  <li>Schedule and coordinate staff and other meetings</li>
                </ul>
              </div>

              <div className="my-5">
                <p className="my-1 italic font-semibold">
                  Iba Primary Health Centre Ojo Lagos
                </p>
                <h3 className="font-semibold  ">INDUSTRIAL TRAINING</h3>
                <ul className="list-disc list-inside mx-4">
                  <li>Sorted files, organized and reports</li>
                  <li>Analysed Samples, provide solutions and gave Reports</li>
                </ul>
              </div>

              {/* Add experience entries here */}
            </section>

            <section className="my-3 ">
              <h2 className="text-green-400 font-semibold">
                Across the Internet
              </h2>
              <div className="flex gap-5">
                <p>
                  <a
                    href="https://www.github.com/Dunniola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    GitHub
                  </a>
                </p>

                <p>
                  <a
                    href="https://www.linkedin.com/in/edu-zainab-oladunni-091809254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Linkedln
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Helmet>
    </>
  );
}

export default App;
