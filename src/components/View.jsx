import React from "react";
import Sidebar from "./Sidebar";

const View = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-6">
        <div className="w-full mx-auto px-6 py-6 h-auto mt-10 max-w-4xl bg-white rounded-xl shadow-md border border-gray-300">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Abukar Ibrahim Mohamed</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Download File
            </button>
          </div>

          {/* Details Section */}
          <div className="flex items-start gap-6 mb-6">
            {/* Labels */}
            <ul className="font-medium">
              <li>From:</li>
              <li>Date:</li>
              <li>To:</li>
              <li>Title:</li>
              <li>Subject:</li>
            </ul>
            {/* Values */}
            <ul>
              <li>CEO of iDan IT Solutions</li>
              <li>July 1, 2023</li>
              <li>Mohamed Omar Adam</li>
              <li>Software Engineer</li>
              <li>
                Permission Request <span className="font-semibold text-green-600">Accepted</span>
              </li>
            </ul>
          </div>

          {/* Approval Letter */}
          <p className="mb-6">
            Dear Khadija Al-Makhzoumi,
            <br />
            <br />
            I am pleased to inform you that your request for permission to conduct [specific activity] has been approved.
            This approval is granted under the terms and conditions set forth in your application submitted on [submission date].
            <br />
            <br />
            We appreciate your initiative and commitment to [related cause or project]. Please ensure that all relevant guidelines are followed during the execution of this project.
            <br />
            <br />
            Best wishes for your endeavor.
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <p>
              Sincerely, <br />
              Hamze Abdi Barre <br />
              Prime Minister
            </p>
            <div className="text-8xl font-bold text-gray-300">PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
