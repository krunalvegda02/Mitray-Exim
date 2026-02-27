"use client";

export function WhatsAppButton() {
  const phone = "+91XXXXXXXXXX"; // replace

  return (
    <div
      className="fixed right-6 bottom-6 z-50"
      title="WhatsApp us for export inquiries"
    >
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67-.148-.197 0-.518.148-.989.62-.49.49-1.877 1.836-2.274 2.233-.396.395-.642.518-.9.494-.234-.022-1.955-.74-3.504-2.288C7.931 13.105 6.065 11.24 5.8 9.9c-.022-.256.074-.47.23-.627.16-.16.373-.255.63-.255.074 0 .22.024.395.124.174.099 1.344 1.574 1.518 1.794.174.22.297.27.494.27.174 0 .37-.074.567-.223.196-.149 2.187-2.014 5.074-3.88.49-.31.94-.47 1.344-.47.396 0 .77.168.989.518.218.35.218.988-.023 1.314-.24.35-1.91.858-2.259.98l-.71.298c-.374.148-.67.22-1.065.074-.396-.149-1.67-1.958-1.9-2.208-.23-.25-.415-.31-.59-.31-.15 0-.348.074-.522.223-.174.15-.644.62-.644 1.485 0 .812.595 1.55.67 1.648.074.099.988 1.574 2.364 2.324.49.27 1.03.42 1.595.42.57 0 1.314-.149 1.958-.42z" />
        </svg>
      </a>
    </div>
  );
}
