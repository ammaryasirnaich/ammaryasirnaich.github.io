import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a className="hover:text-foreground" href={`mailto:${site.email}`}>
              Email
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
