/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Menu,
  Layers,
  FileText,
  Download,
  ArrowLeft,
  ArrowRight,
  Home,
  LayoutGrid,
  MessageSquare,
  User,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-secondary/30 pb-24 md:pb-0">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-surface/80 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <button className="text-on-surface hover:text-on-surface-variant transition-colors duration-300">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div className="text-xl font-serif tracking-[0.2em] uppercase text-on-surface">
          ARCHITECT
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center text-[10px] uppercase tracking-widest font-sans text-on-surface">
            PRO
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[75vh] min-h-[600px] overflow-hidden flex flex-col justify-end p-8 md:p-16">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="wide shot of a brutalist concrete cafe with large glass windows and minimalist furniture at dusk with warm interior lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY9Bv_YwH-nXn1Mg2eNhjmdGabfW6rSQVx8plyLQzZQYY_9sqt-IHAeVDAl9Rc6IrmmwMOgWGROrDrnRjSPZy76ulNBpEvF9BhYFrdSY0hFzFI7Bpz4y4qN5cV_4ElpD28Sdnk2J_35ETbIg3WufR_Gx0hV4qlHlezJk7Qcx1H0THNqwQk6didcsnrc5KENSkbSeAlrHCqhZhJLpLF5BBNgrtxoNhl3DmYJUQ8EaHmnCWNchBTgQUcmnt4BorE6Ty659ETu9jMRh8"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-5xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-on-primary mb-4 font-medium">
              Commercial / 2024
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-on-primary leading-tight mb-8">
              Modern
              <br />
              Concrete Cafe
            </h1>
            <div className="flex flex-wrap gap-8 items-center border-t border-on-primary/20 pt-8">
              <button className="bg-primary text-on-primary px-8 py-4 text-[10px] uppercase tracking-widest hover:bg-primary-dim transition-colors font-semibold">
                Inquire Now
              </button>
              <button className="text-on-primary text-[10px] uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity font-medium">
                <Layers size={16} strokeWidth={1.5} />
                Save to Moodboard
              </button>
            </div>
          </div>
        </section>

        {/* Content Grid: Asymmetric Layout */}
        <div className="max-w-7xl mx-auto px-6 mt-24 grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Project Specs */}
          <aside className="md:col-span-4 space-y-12 order-2 md:order-1">
            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-outline font-semibold border-b border-outline-variant/20 pb-2">
                Project Specs
              </h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">
                    Area
                  </p>
                  <p className="text-xl font-serif text-on-surface">450 m²</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">
                    Location
                  </p>
                  <p className="text-xl font-serif text-on-surface">
                    Oslo, Norway
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">
                    Materials
                  </p>
                  <p className="text-sm font-sans leading-relaxed text-on-surface">
                    Raw Concrete, Oak, Brushed Steel
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">
                    Duration
                  </p>
                  <p className="text-xl font-serif text-on-surface">
                    14 Months
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                The Blueprint
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                A study in light and shadow, exploring the textural contrast of
                industrial materials against organic human interaction.
              </p>
              <div className="pt-4 flex items-center gap-4 text-outline font-mono text-[10px]">
                <span>01</span>
                <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
                <span>100</span>
              </div>
            </div>
          </aside>

          {/* Designer Notes */}
          <section className="md:col-span-8 order-1 md:order-2">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-serif mb-8 text-on-surface">
                Designer Notes
              </h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-light">
                <p>
                  The Modern Concrete Cafe was born from a desire to strip away
                  the artifice of traditional retail spaces. We approached the
                  site as a monolith, carving out volumes to invite the northern
                  light to play across the brutalist surfaces throughout the
                  day.
                </p>
                <p>
                  Every seam in the concrete and every grain in the
                  hand-selected white oak was considered as a structural element
                  of the narrative. The silence of the space is its primary
                  luxury, providing a sanctuary of stillness in the urban
                  center.
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-outline-variant/20 pt-12">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-outline font-semibold mb-6">
                Architectural Assets
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="max-w-md">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Includes detailed floor plans, structural sections, and
                      material schedules ready for construction.
                    </p>
                  </div>
                  <button className="flex items-center gap-4 bg-surface-container-high hover:bg-surface-container-highest transition-colors px-6 py-4 border border-outline-variant/20 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary text-on-primary shrink-0">
                      <FileText size={20} strokeWidth={1.5} />
                    </div>
                    <div className="text-left flex-1">
                      <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface">
                        Download Full Architectural Plan
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-on-surface-variant mt-0.5">
                        PDF Format, 24MB
                      </div>
                    </div>
                    <Download
                      size={20}
                      strokeWidth={1.5}
                      className="ml-4 text-outline group-hover:text-primary transition-colors shrink-0"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery: Bento Grid inspired */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-square bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="detail shot of raw concrete wall texture with sharp shadows and a single minimalist wooden bench"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaQqvOnhJiL1JezzZ1YxGRbRaUgLTJf8zwocV0EK4V8wz6wf1M_8eXDF5Rd5LAnfbxmvz4BEU0bZgEaBS6Mted5TwTB31gp6CLdQqfTLNU1OhJ38mAJF2eLTCaJo7rbPbHIA_UJ50o8bcVF6UEz5vdgP0qVT_hxs6lUSrgxl2LN0aKZeKNnMo61XSu7xR3e5JOBn1rcVawaMn_BBfr0-Vtlf6cIGlMXac-JQMuisNKVCCHzd3YDUDjLL0SmG_NZ2Ya7DoESy7l0aQ"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] bg-surface-container overflow-hidden md:mt-12">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="interior view of an office space with floor-to-ceiling windows and clean architectural lines"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtGvBn9abVhp7MyQoK4sHoe_vgH6yHkcfhGKDCQTI3CZDaFRY4I3bOutmsKKy9VyDI871myVhRLFFza5UNVF90in8WYJcaaPYYsu4ko-VDLjHaN-apK_vgXEhZuB2hv0pK0YPz-f31el3ocfaew4Xe2K59f7hfmyMqQ2Q9pM2eK_TzMjWWdUv9fEmH6p6EXCmHeDCwk1EWPdv8g5VvvVih-e9Bjc_hvZPwPQrRYjv3BZuJtkwfwOvvcvikEBue_MFqsVzM_V2n7rY"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-2 aspect-[16/9] bg-surface-container overflow-hidden mt-4">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="close-up architectural detail of steel and glass intersection on a modern building facade"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgdqc6yePizYp3GlM9knuctKONm00jLNS4FeaX6yO0o_wVPjuLm5r3YB_p3SvKVPYRblUgLv6Q7FPi-INpficrQDlfbLqUnia_Ni83CtOfeUxAGuc9FpgJtlEp6HORmbO77tYwyMtKWi044nYQ3kOOjzQUtV6eW7ONv8sB3L5fY602536KTpcTVELh2342eBF531C07eA7qOkBU8DFooWfrNj_G8NvWsPrOz3wVqaA65Pp1HVlc7pAvRopzxPz0O5sbuURIclDMY"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Next Project Preview */}
        <section className="mt-32 border-t border-outline-variant/20 pt-20 pb-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-outline mb-4 font-semibold">
                Up Next
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-on-surface opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                Nordic Glass Pavillion
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 hover:border-on-surface transition-colors text-on-surface">
                <ArrowLeft size={20} strokeWidth={1.5} />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 hover:border-on-surface transition-colors text-on-surface">
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile/Tablet) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-4 bg-surface/90 backdrop-blur-md border-t border-outline-variant/20">
        <a
          href="#"
          className="flex flex-col items-center justify-center text-outline hover:text-on-surface transition-colors"
        >
          <Home size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-medium tracking-widest uppercase mt-1.5">
            Home
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-on-surface border-t-2 border-on-surface pt-0 -mt-4"
        >
          <div className="pt-4 flex flex-col items-center">
            <LayoutGrid size={20} strokeWidth={2} />
            <span className="text-[9px] font-bold tracking-widest uppercase mt-1.5">
              Explore
            </span>
          </div>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-outline hover:text-on-surface transition-colors"
        >
          <Layers size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-medium tracking-widest uppercase mt-1.5">
            Moodboard
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-outline hover:text-on-surface transition-colors"
        >
          <MessageSquare size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-medium tracking-widest uppercase mt-1.5">
            Inquiry
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-outline hover:text-on-surface transition-colors"
        >
          <User size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-medium tracking-widest uppercase mt-1.5">
            Profile
          </span>
        </a>
      </nav>
    </div>
  );
}
