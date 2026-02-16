import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface NavLinkConfig {
  links: { label: string; href: string }[]
}

export default ((config: NavLinkConfig) => {
  const NavLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <nav class={displayClass}>
        {config.links.map((link) => (
          <a href={link.href}>{link.label}</a>
        ))}
      </nav>
    )
  }

  NavLinks.css = `
    nav {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    nav a {
      color: var(--darkgray);
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      transition: color 0.2s ease;
    }

    nav a:hover {
      color: var(--secondary);
    }

    @media (max-width: 600px) {
      nav {
        gap: 1rem;
      }

      nav a {
        font-size: 0.9rem;
      }
    }
  `
  return NavLinks
}) satisfies QuartzComponentConstructor<NavLinkConfig>
