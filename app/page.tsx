import Image from "next/image";
import {
  profile,
  experience,
  clientGroups,
  talks,
  education,
  certifications,
  volunteering,
  type Item,
} from "./content";
import s from "./page.module.css";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={s.section}>
      <h2 className={s.label}>{title}</h2>
      <div className={s.body}>{children}</div>
    </section>
  );
}

function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className={s.list}>
      {items.map((it) => (
        <li key={it.title} className={s.row}>
          <span className={s.date}>{it.dates}</span>
          <div>
            <div className={s.title}>
              {it.url ? (
                <a href={it.url} target="_blank" rel="noreferrer">
                  {it.title}
                  <span className={s.arrow} aria-hidden>↗</span>
                </a>
              ) : (
                it.title
              )}
            </div>
            {it.subtitle && <div className={s.sub}>{it.subtitle}</div>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <main className={s.page}>
      <header className={s.header}>
        <Image
          src={profile.photo}
          alt={profile.name}
          width={64}
          height={64}
          className={s.photo}
          priority
        />
        <div>
          <h1 className={s.name}>{profile.name}</h1>
          <p className={s.headline}>{profile.headline}</p>
          <p className={s.meta}>{profile.location}</p>
        </div>
      </header>

      <div className={s.intro}>
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <nav className={s.links}>
          {profile.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
              <span className={s.arrow} aria-hidden>↗</span>
            </a>
          ))}
        </nav>
      </div>

      <Section title="Experience">
        <ul className={s.list}>
          {experience.map((co, ci) => (
            <li key={co.name + ci} className={s.company}>
              {co.roles.map((r) => (
                <div key={r.title + r.dates} className={s.row}>
                  <span className={s.date}>{r.dates}</span>
                  <div>
                    <div className={s.title}>
                      {r.title}
                      <span className={s.at}> at </span>
                      {co.url ? (
                        <a href={co.url} target="_blank" rel="noreferrer">
                          {co.name}
                        </a>
                      ) : (
                        co.name
                      )}
                    </div>
                    {r.location && <div className={s.sub}>{r.location}</div>}
                    {r.bullets && (
                      <ul className={s.bullets}>
                        {r.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Clients & brands">
        <ul className={s.list}>
          {clientGroups.map((g) => (
            <li key={g.company} className={s.row}>
              <span className={s.group}>{g.company}</span>
              <ul className={s.clients}>
                {g.clients.map((c) => (
                  <li key={c.name}>
                    {c.name}
                    {c.note && <span className={s.note}>{c.note}</span>}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Speaking">
        <ItemList items={talks} />
      </Section>

      <Section title="Education">
        <ItemList items={education} />
      </Section>

      <Section title="Certifications">
        <ItemList items={certifications} />
      </Section>

      <Section title="Volunteering">
        <ItemList items={volunteering} />
      </Section>

      <footer className={s.footer}>
        <span>© {year} {profile.name}</span>
        <a href={profile.links[0].url} target="_blank" rel="noreferrer">
          Get in touch on LinkedIn <span aria-hidden>↗</span>
        </a>
      </footer>
    </main>
  );
}
