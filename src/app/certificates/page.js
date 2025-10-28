import React from 'react';
import Link from 'next/link';

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with back button */}
      <div className="bg-[#0a0a0a] border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </Link>
          </div>
          <h1 className="text-2xl font-bold">Our Certificates</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* PDF Viewer - Full height */}
      <div className="w-full h-[calc(100vh-73px)]">
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
    </div>
  );
}
