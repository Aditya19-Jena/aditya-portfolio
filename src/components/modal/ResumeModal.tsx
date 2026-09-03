import { useEffect, useRef, useState } from "react";

import {
  X,
  ExternalLink,
  Download,
  FileText,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// PDF.js worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_URL = "/Aditya_Kumar_Jena.pdf";

const DEFAULT_ZOOM = 0.8;
const MIN_ZOOM = 0.7;
const MAX_ZOOM = 1.4;
const ZOOM_STEP = 0.1;

const ResumeModal = ({
  isOpen,
  onClose,
}: ResumeModalProps) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  const [viewerWidth, setViewerWidth] = useState(760);
  const [numPages, setNumPages] = useState(0);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  /* =====================================================
     KEYBOARD + BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Close modal
      if (event.key === "Escape") {
        onClose();
      }

      // Zoom in
      if (
        event.key === "+" ||
        event.key === "="
      ) {
        setZoom((prev) =>
          Math.min(prev + ZOOM_STEP, MAX_ZOOM)
        );
      }

      // Zoom out
      if (event.key === "-") {
        setZoom((prev) =>
          Math.max(prev - ZOOM_STEP, MIN_ZOOM)
        );
      }

      // Reset zoom
      if (event.key === "0") {
        setZoom(DEFAULT_ZOOM);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen, onClose]);

  /* =====================================================
     RESET WHEN MODAL OPENS
  ===================================================== */

  useEffect(() => {
    if (!isOpen) return;

    setNumPages(0);
    setPdfError(null);
    setZoom(DEFAULT_ZOOM);
  }, [isOpen]);

  /* =====================================================
     RESPONSIVE PDF WIDTH
  ===================================================== */

  useEffect(() => {
    if (!isOpen || !viewerRef.current) return;

    const updateWidth = () => {
      if (!viewerRef.current) return;

      const containerWidth =
        viewerRef.current.clientWidth;

      const isMobile =
        window.innerWidth < 640;

      const horizontalPadding = isMobile
        ? 24
        : 48;

      const availableWidth =
        containerWidth -
        horizontalPadding;

      /*
       * Keep the actual resume narrow.
       * This prevents the PDF from stretching
       * across the entire modal.
       */

      const maxPdfWidth = isMobile
        ? 700
        : 760;

      const calculatedWidth = Math.min(
        availableWidth,
        maxPdfWidth
      );

      setViewerWidth(
        Math.max(280, calculatedWidth)
      );
    };

    updateWidth();

    const resizeObserver =
      new ResizeObserver(updateWidth);

    resizeObserver.observe(
      viewerRef.current
    );

    window.addEventListener(
      "resize",
      updateWidth
    );

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        updateWidth
      );
    };
  }, [isOpen]);

  /* =====================================================
     PDF HANDLERS
  ===================================================== */

  const handleDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(numPages);
    setPdfError(null);
  };

  const handleDocumentLoadError = (
    error: Error
  ) => {
    console.error(
      "Resume PDF failed to load:",
      error
    );

    setPdfError(
      error?.message ||
        "Unable to load the resume PDF."
    );
  };

  /* =====================================================
     ZOOM
  ===================================================== */

  const zoomIn = () => {
    setZoom((prev) =>
      Math.min(prev + ZOOM_STEP, MAX_ZOOM)
    );
  };

  const zoomOut = () => {
    setZoom((prev) =>
      Math.max(prev - ZOOM_STEP, MIN_ZOOM)
    );
  };

  const resetZoom = () => {
    setZoom(DEFAULT_ZOOM);
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/90
        p-2
        sm:p-4
        backdrop-blur-xl
      "
      onClick={onClose}
    >
      {/* =================================================
          MODAL
      ================================================= */}

      <div
        className="
          relative
          flex
          h-[94vh]
          w-[760px]
          max-w-[calc(100vw-32px)]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.09]
          bg-[#0b0b0d]
          shadow-[0_30px_100px_rgba(0,0,0,0.8)]
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <header
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-white/[0.08]
            bg-[#101012]
            px-4
            py-3
            sm:px-5
            sm:py-3.5
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-3">
            {/* File icon */}

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.08]
                bg-white/[0.035]
              "
            >
              <FileText
                size={16}
                strokeWidth={1.8}
                className="text-zinc-200"
              />
            </div>

            {/* Resume information */}

            <div>
              <div className="flex items-center gap-1.5">
                <h2
                  className="
                    text-[14px]
                    font-semibold
                    text-zinc-100
                  "
                >
                  Resume
                </h2>

                <span
                  className="
                    rounded-md
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-1.5
                    py-0.5
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-zinc-400
                  "
                >
                  PDF
                </span>

                {numPages > 0 && (
                  <span
                    className="
                      rounded-md
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      px-1.5
                      py-0.5
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-zinc-500
                    "
                  >
                    {numPages}{" "}
                    {numPages === 1
                      ? "PAGE"
                      : "PAGES"}
                  </span>
                )}
              </div>

              <p
                className="
                  mt-0.5
                  text-[10px]
                  text-zinc-500
                "
              >
                Aditya Kumar Jena
                <span className="mx-1.5 text-zinc-700">
                  ·
                </span>
                2026
              </p>
            </div>
          </div>

          {/* RIGHT CONTROLS */}

          <div className="flex items-center gap-1.5">
            {/* Desktop Zoom */}

            <div
              className="
                hidden
                items-center
                rounded-lg
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-0.5
                sm:flex
              "
            >
              {/* Zoom Out */}

              <button
                type="button"
                onClick={zoomOut}
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-md
                  text-zinc-500
                  transition
                  hover:bg-white/[0.06]
                  hover:text-zinc-200
                "
                aria-label="Zoom out"
              >
                <ZoomOut size={13} />
              </button>

              {/* Zoom Percentage */}

              <span
                className="
                  min-w-[42px]
                  text-center
                  text-[9px]
                  font-medium
                  text-zinc-400
                "
              >
                {Math.round(zoom * 100)}%
              </span>

              {/* Zoom In */}

              <button
                type="button"
                onClick={zoomIn}
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-md
                  text-zinc-500
                  transition
                  hover:bg-white/[0.06]
                  hover:text-zinc-200
                "
                aria-label="Zoom in"
              >
                <ZoomIn size={13} />
              </button>
            </div>

            {/* Reset */}

            <button
              type="button"
              onClick={resetZoom}
              className="
                hidden
                h-8
                items-center
                gap-1.5
                rounded-lg
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-2.5
                text-[9px]
                font-medium
                text-zinc-500
                transition
                hover:border-white/[0.14]
                hover:bg-white/[0.06]
                hover:text-zinc-200
                sm:flex
              "
              aria-label="Reset zoom"
              title="Reset zoom to 80%"
            >
              <RotateCcw size={11} />              
            </button>

            {/* Close */}

            <button
              type="button"
              onClick={onClose}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-zinc-500
                transition
                hover:border-white/[0.16]
                hover:bg-white/[0.07]
                hover:text-white
              "
              aria-label="Close resume"
            >
              <X size={15} />
            </button>
          </div>
        </header>

        {/* =================================================
            PDF VIEWER
        ================================================= */}

        <main
          className="
            relative
            min-h-0
            flex-1
            bg-[#070708]
          "
        >
          <div
            ref={viewerRef}
            className="
              resume-scroll
              h-full
              w-full
              overflow-auto
            "
          >
            <div
              className="
                flex
                min-h-full
                flex-col
                items-center
                px-3
                py-7
                sm:px-6
                sm:py-8
              "
            >
              {/* =================================================
                  ERROR
              ================================================= */}

              {pdfError ? (
                <div
                  className="
                    flex
                    min-h-[300px]
                    w-full
                    max-w-sm
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-red-400/10
                      bg-red-400/[0.05]
                    "
                  >
                    <FileText
                      size={18}
                      className="text-red-400"
                    />
                  </div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-zinc-200
                    "
                  >
                    Failed to load resume
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-relaxed
                      text-zinc-500
                    "
                  >
                    {pdfError}
                  </p>

                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/[0.10]
                      bg-white/[0.04]
                      px-3.5
                      py-2
                      text-[10px]
                      font-medium
                      text-zinc-300
                      transition
                      hover:bg-white/[0.08]
                      hover:text-white
                    "
                  >
                    <ExternalLink size={12} />
                    Open PDF
                  </a>
                </div>
              ) : (
                <Document
                  file={RESUME_URL}
                  onLoadSuccess={
                    handleDocumentLoadSuccess
                  }
                  onLoadError={
                    handleDocumentLoadError
                  }
                  loading={
                    <div
                      className="
                        flex
                        min-h-[350px]
                        w-full
                        items-center
                        justify-center
                      "
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div
                          className="
                            h-6
                            w-6
                            animate-spin
                            rounded-full
                            border-2
                            border-zinc-700
                            border-t-zinc-200
                          "
                        />

                        <span
                          className="
                            text-[10px]
                            text-zinc-500
                          "
                        >
                          Loading resume...
                        </span>
                      </div>
                    </div>
                  }
                >
                  <div className="flex flex-col items-center gap-6">
                    {Array.from(
                      new Array(numPages),
                      (_, index) => (
                        <div
                          key={`page_${index + 1}`}
                          className="
                            overflow-hidden
                            rounded-[3px]
                            bg-white
                            shadow-[0_18px_55px_rgba(0,0,0,0.55)]
                            ring-1
                            ring-black/30
                          "
                        >
                          <Page
                            pageNumber={index + 1}
                            width={
                              viewerWidth * zoom
                            }
                            renderTextLayer={false}
                            renderAnnotationLayer={
                              false
                            }
                            loading={
                              <div
                                className="
                                  flex
                                  items-center
                                  justify-center
                                  bg-white
                                "
                                style={{
                                  width:
                                    viewerWidth *
                                    zoom,
                                  minHeight:
                                    viewerWidth *
                                    zoom *
                                    1.414,
                                }}
                              >
                                <span
                                  className="
                                    text-[10px]
                                    text-zinc-400
                                  "
                                >
                                  Loading page...
                                </span>
                              </div>
                            }
                          />
                        </div>
                      )
                    )}
                  </div>
                </Document>
              )}
            </div>
          </div>

          {/* Bottom fade */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              h-7
              bg-gradient-to-t
              from-black/20
              to-transparent
            "
          />
        </main>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-t
            border-white/[0.08]
            bg-[#101012]
            px-4
            py-2.5
            sm:px-5
            sm:py-3
          "
        >
          {/* Availability */}

          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400/40
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_8px_rgba(52,211,153,0.4)]
                "
              />
            </span>

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.13em]
                text-zinc-500
              "
            >
              Available for opportunities
            </span>
          </div>

          {/* Actions */}

          <div
            className="
              flex
              w-full
              items-center
              justify-end
              gap-1.5
              sm:w-auto
            "
          >
            {/* Mobile Zoom */}

            <div
              className="
                flex
                items-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-0.5
                sm:hidden
              "
            >
              <button
                type="button"
                onClick={zoomOut}
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  text-zinc-500
                  transition
                  hover:text-zinc-200
                "
                aria-label="Zoom out"
              >
                <ZoomOut size={12} />
              </button>

              <span
                className="
                  min-w-[38px]
                  text-center
                  text-[9px]
                  text-zinc-400
                "
              >
                {Math.round(zoom * 100)}%
              </span>

              <button
                type="button"
                onClick={zoomIn}
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  text-zinc-500
                  transition
                  hover:text-zinc-200
                "
                aria-label="Zoom in"
              >
                <ZoomIn size={12} />
              </button>
            </div>

            {/* Mobile Reset */}

            <button
              type="button"
              onClick={resetZoom}
              className="
                flex
                h-8
                items-center
                gap-1.5
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-2.5
                text-[9px]
                font-medium
                text-zinc-500
                transition
                hover:border-white/[0.14]
                hover:bg-white/[0.06]
                hover:text-zinc-200
                sm:hidden
              "
              aria-label="Reset zoom"
            >
              <RotateCcw size={10} />              
            </button>

            {/* Open */}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                h-8
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.025]
                px-3
                text-[10px]
                font-medium
                text-zinc-300
                transition
                hover:border-white/[0.18]
                hover:bg-white/[0.07]
                hover:text-white
              "
            >
              <ExternalLink size={11} />
              Open
            </a>

            {/* Download */}

            <a
              href={RESUME_URL}
              download="Aditya_Kumar_Jena_Resume.pdf"
              className="
                inline-flex
                h-8
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.025]
                px-3
                text-[10px]
                font-medium
                text-zinc-300
                transition
                hover:border-white/[0.18]
                hover:bg-white/[0.07]
                hover:text-white
              "
            >
              <Download size={11} />
              Download
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ResumeModal;