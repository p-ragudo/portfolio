import { MapPin, Mail } from "lucide-react";
import NetworkBackground from "@/components/NetworkBackground";

export default function Home() {
  return (
    <div className="w-full">
      {/* 
        -mt-28 pulls this container up behind the header to the top of the browser (y = 0).
        pt-28 offsets the content back down so text positions stay identical.
        overflow-hidden clips at the top of the browser AND right above Technical Skills.
      */}
      <div className="relative -mt-28 overflow-hidden pt-28 mb-8">
        <NetworkBackground />

        <main className="relative z-10 mx-auto max-w-3xl px-6 pt-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 sm:text-6xl">
            Paolo Ragudo
          </h1>

          <div className="mt-3 flex items-center justify-center gap-1 text-xs font-medium text-neutral-500">
            <MapPin className="h-3.5 w-3.5 text-neutral-400" />
            <span>Philippines</span>
          </div>

          <p className="mx-auto mt-6 max-w-lg text-normal leading-relaxed text-neutral-900 tracking-tight">
            Full-stack software engineer, specializing in backend, systems, and
            cloud-native applications.
          </p>

          {/* Contact Links */}
          <div className="mt-24 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 sm:gap-10">
            <a
              href="mailto:ragudopaolo@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-neutral-950"
            >
              <Mail className="h-5 w-5 text-red-500" />
              <span>ragudopaolo@gmail.com</span>
            </a>

            <a
              href="https://github.com/p-ragudo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-neutral-950"
            >
              <svg
                className="h-5 w-5 fill-neutral-900"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>p-ragudo</span>
            </a>

            <a
              href="https://linkedin.com/in/paolo-ragudo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-neutral-950"
            >
              <svg
                className="h-5 w-5 fill-[#0A66C2]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
              <span>in/paolo-ragudo</span>
            </a>
          </div>
        </main>
      </div>

      {/* Technical Skills Section: Solid cutoff */}
      <section className="relative z-10 w-full bg-[#EBF0F2] py-8">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-normal text-neutral-500">
            Technical Skills
          </p>
        </div>
      </section>

      {/* Rest of the page */}
      <div className="relative z-10 min-h-[400px] bg-white">
        {/* Further sections */}
      </div>
    </div>
  );
}