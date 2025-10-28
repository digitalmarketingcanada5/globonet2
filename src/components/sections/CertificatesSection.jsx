import React from 'react';

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Our Certificates</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          View our official counsellor certifications and credentials.
        </p>
      </div>
      
      {/* PDF Viewer Container */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-[#111111] rounded-xl border border-gray-800 overflow-hidden">
          {/* PDF Embed with scrollable iframe - filename hidden */}
          <div className="relative w-full" style={{ height: '800px' }}>
            <iframe
              src="/all_cousellor_certificate.pdf#toolbar=0&navpanes=0&statusbar=0&messages=0&scrollbar=1&view=FitH"
              className="w-full h-full"
              title="Counsellor Certificates"
              style={{
                border: 'none',
                display: 'block'
              }}
            />
          </div>
          
          {/* Download Button - Commented out as per client request */}
          {/* 
          <div className="bg-[#0a0a0a] p-4 border-t border-gray-800 text-center">
            <a
              href="/all_cousellor_certificate.pdf"
              download
              className="inline-flex items-center gap-2 bg-lime-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Certificates PDF
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};
