import React from 'react'

function Page2() {
  return (
    <div className="container mx-auto px-4 bg-background">
      <h1 className="text-center mt-16 md:mt-28 text-2xl md:text-3xl lg:text-4xl">
        What solutions does Namely offer Tech Companies?
      </h1>
      
      <div className="border-2 md:border-4 border-neutral-700 bg-background w-full lg:w-[90%] h-auto mx-auto mt-6 md:mt-10 p-4 md:p-6">
        <h2 className="text-center text-2xl md:text-3xl mt-4 md:mt-8">
          Our Modern and Intuitive Platform
        </h2>
        
        <div className="w-full lg:w-[90%] xl:w-[80%] h-auto mt-6 mx-auto rounded-xl p-2 md:p-4">
          <div className="flex flex-col lg:flex-row items-start">
            <h3 className="text-xl md:text-2xl mt-4 lg:mt-10 lg:w-1/4">HR</h3>
            <p className="mt-2 lg:mt-10 lg:w-3/4">
              An intuitive and flexible single source of truth for your people data—with a company
              newsfeed, unlimited self-service workflows, time off tracking, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
            {[
              { title: "Employee Onboarding for E-Commerce", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." },
              { title: "HR Analytics & Reporting", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." },
              { title: "Performance & Employee Engagement", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." },
              { title: "Compliance Library", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." }
            ].map((item, index) => (
              <div key={index} className="bg-background border-2 border-neutral-700 w-full h-full p-4 md:p-6 rounded-lg">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 md:mt-4">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-16 mx-auto">
          {[
            { title: "Benefits Administration", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." },
            { title: "Payroll", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." },
            { title: "Compliance Plus", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." },
            { title: "Team Management", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." }
          ].map((item, index) => (
            <div key={index} className="bg-background border-2 border-neutral-700 w-full h-full p-4 md:p-6 rounded-xl">
              <h4 className="uppercase text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 md:mt-4">{item.content}</p>
            </div>
          ))}
        </div>
    
        <div className="border-2 border-neutral-700 mt-10 md:mt-14 mx-auto bg-background w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[450px] h-auto p-4 md:p-6 rounded-xl">
          <h4 className="uppercase text-lg font-semibold">Compliance Library</h4>
          <p className="mt-2 md:mt-4">
            With unlimited role-based workflows, you can automatically collect eSignatures,
            integrate with E-Verify, and welcome new hires before day one.
          </p>
        </div>
      </div>
    
      <div className="border-2 md:border-4 border-neutral-700 bg-background w-full lg:w-[90%] h-auto mx-auto mt-6 md:mt-10 p-4 md:p-6">
        <h2 className="text-center text-2xl md:text-3xl mt-4 md:mt-8">
          Our Enhanced Services
        </h2>
        <div className="flex flex-wrap gap-4 md:gap-7 mt-6 md:mt-10 justify-center">
          {[
            { title: "Managed Benefit", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." },
            { title: "Managed Payroll", content: "With unlimited role-based workflows, you can automatically collect eSignatures, integrate with E-Verify, and welcome new hires before day one." }
          ].map((item, index) => (
            <div key={index} className="border-2 border-neutral-700 w-full sm:w-[90%] md:w-[45%] lg:w-[600px] h-auto p-4 md:p-6 rounded-xl">
              <h4 className="uppercase text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 md:mt-4">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page2

