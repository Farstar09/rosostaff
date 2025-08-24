import React from "react";
import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

// ---------- CONFIGURE YOUR STAFF HERE ---------- //
const STAFF = [
  {
    section: "OWNER",
    members: [
      {
        name: "Attract",
        title: "Owner",
        avatar: "attract.jpg",
        socials: { x: "https://x.com/AttractMP4" }
      },
      {
        name: "Sapph",
        title: "Owner",
        avatar: "sapph.jpg",
        socials: { x: "https://x.com/xosapphireee" }
      }
    ]
  },
  {
    section: "CO OWNER",
    members: [
      {
        name: "Kurivolt",
        title: "Co-Owner",
        avatar: "kurivolt.jpg",
        socials: { x: "https://x.com/kurivolte" }
      },
      {
        name: "Verify Redd",
        title: "Co-Owner",
        avatar: "verify-redd.jpg",
        socials: { x: "https://x.com/Reddishermine71" }
      }
    ]
  },
  {
    section: "EXEC MANAGER",
    members: [
      {
        name: "Star",
        title: "Executive Manager",
        avatar: "star.jpg",
        socials: { x: "https://x.com/St4rishim" }
      }
    ]
  }
];

const classNames = (...cls) => cls.filter(Boolean).join(" ");

const gradientText =
  "bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } })
};

function Initials({ name }) {
  const initials = name.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase();
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-700 text-xl font-bold text-zinc-200 ring-1 ring-zinc-700/60">
      {initials}
    </div>
  );
}

function SocialLink({ href, label, children }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700/70 bg-zinc-900/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-red-500/60 hover:bg-zinc-900 hover:shadow-[0_0_20px_-6px_rgba(239,68,68,0.6)]"
    >
      {children}
    </a>
  );
}

function StaffCard({ member, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-zinc-900 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-red-600/60 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.4),0_10px_40px_-10px_rgba(239,68,68,0.4)]"
    >
      <div className="pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(239,68,68,0.12), transparent 40%)" }} />
      <div className="flex items-center gap-4">
        {member.avatar ? (
          <img src={member.avatar} alt={member.name} className="h-20 w-20 rounded-2xl object-cover object-center ring-1 ring-zinc-800/70" />
        ) : (
          <Initials name={member.name} />
        )}
        <div className="min-w-0">
          <h3 className="truncate text-xl font-semibold text-zinc-100">{member.name}</h3>
          <p className="truncate text-sm text-zinc-400">{member.title}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <SocialLink href={member.socials?.x} label={`${member.name} on X`}>
          <Twitter className="h-5 w-5" />
        </SocialLink>
      </div>
    </motion.div>
  );
}

function Section({ title, members }) {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={classNames("mb-6 text-2xl font-bold tracking-tight sm:text-3xl", gradientText)}
        >
          {title}
        </motion.h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => <StaffCard key={m.name} member={m} index={i} />)}
        </div>
      </div>
    </section>
  );
}

export default function ROSOStaffSite() {
  return (
    <div
      className="min-h-screen bg-[#0b0b0c] text-zinc-200 [--x:50%] [--y:50%]"
      onMouseMove={(e) => {
        const root = document.documentElement;
        root.style.setProperty("--x", `${(e.clientX / window.innerWidth) * 100}%`);
        root.style.setProperty("--y", `${(e.clientY / window.innerHeight) * 100}%`);
      }}
    >
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-red-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute left-0 top-1/3 h-[18rem] w-[18rem] rounded-full bg-white/5 blur-[100px]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src="roso-logo.png" alt="ROSO" className="h-9 w-9 rounded-xl object-contain ring-1 ring-red-500/30" />
            <span className={"text-lg font-bold tracking-wide " + gradientText}>ROSO • STAFF</span>
          </div>
          <nav className="hidden gap-6 sm:flex text-sm text-zinc-400">
            <a href="#owner" className="transition hover:text-zinc-200">Owner</a>
            <a href="#co-owner" className="transition hover:text-zinc-200">Co-Owner</a>
            <a href="#exec-manager" className="transition hover:text-zinc-200">Exec Manager</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-zinc-800/60 bg-gradient-to-b from-black/60 to-transparent py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="block text-zinc-100">Meet the</span>
            <span className={"mt-2 inline-block " + gradientText}>ROSO Leadership</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-zinc-400 sm:text-base">
            Edit <code>src/App.jsx</code> to update staff. Put profile photos in <code>/public</code>.
          </motion.p>
        </div>
      </section>

      <div id="owner">
        <Section title="OWNER" members={STAFF.find((s) => s.section === "OWNER")?.members || []} />
      </div>
      <div id="co-owner">
        <Section title="CO OWNER" members={STAFF.find((s) => s.section === "CO OWNER")?.members || []} />
      </div>
      <div id="exec-manager">
        <Section title="EXEC MANAGER" members={STAFF.find((s) => s.section === "EXEC MANAGER")?.members || []} />
      </div>

      <footer className="border-t border-zinc-800/80 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-zinc-500">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} ROSO. Built with ❤ in a red/black theme.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="rounded-lg border border-zinc-800/80 px-3 py-1.5 text-zinc-300 transition hover:border-red-500/60 hover:text-white">Contact</a>
              <a href="#" className="rounded-lg border border-zinc-800/80 px-3 py-1.5 text-zinc-300 transition hover:border-red-500/60 hover:text-white">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
