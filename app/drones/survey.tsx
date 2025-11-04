import React from "react";
import Image from "next/image";

type Props = {
  /**
   * Optional decorative background image you mentioned (kept invisible so the section background remains pure black).
   * Pass it like: <IrrigationSurvey bgImage="/images/bg.jpg" image="/images/irrigation.jpg" />
   */
  bgImage?: string;
  /**
   * Main left image for the irrigation visual. Default is empty string so you can pass your own image path.
   */
  image?: string;
};

export default function Survey({ bgImage, image = "" }: Props) {
  return (
    <section className="w-full bg-black text-white py-12">
      {/* Keep the visible background strictly black as requested */}
      <div className="mx-auto px-6 w-full max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden bg-gray-900/20 ring-0">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                {image ? (
                  <Image
                    src={image}
                    alt="Irrigation survey visual"
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
                    <span className="text-sm">
                      Image source is empty — pass image prop
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Irrigation Survey
            </h2>

            <h3 className="text-sm text-gray-300 font-medium mb-4">
              Scope of Operations
            </h3>

            <ul className="space-y-3 text-sm text-gray-300 list-none">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-white/80 flex-shrink-0" />
                <span>
                  Generating the Orthographic map and defining area under the
                  irrigation department.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-white/80 flex-shrink-0" />
                <span>Identification of Irrigation Infrastructure</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-white/80 flex-shrink-0" />
                <span>
                  Digitization of Water Project/ Dam, River and Canals
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-white/80 flex-shrink-0" />
                <span>
                  Identifying the Crop type and the area of cultivation
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-white/80 flex-shrink-0" />
                <span>Exact area of cultivation</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-white/80 flex-shrink-0" />
                <span>Identifying the water source</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hidden background image (optional) so you can pass bgImage="" without changing the visible black background */}
      {bgImage ? (
        <div className="sr-only" aria-hidden>
          <Image src={bgImage} alt="" width={1600} height={600} />
        </div>
      ) : null}
    </section>
  );
}
