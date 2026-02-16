import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import NavLinks from "./quartz/components/NavLinks"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Spacer(),
    NavLinks({
      links: [
        { label: "Posts", href: "/posts/" },
        { label: "About", href: "/about/" },
      ],
    }),
    Component.Search(),
    Component.Darkmode(),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/lufrank",
      RSS: "/index.xml",
    },
    customFooter: "© 2026 Frank Lu",
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => !page.fileData.slug?.startsWith("posts"),
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => !page.fileData.slug?.startsWith("posts"),
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => !page.fileData.slug?.startsWith("posts"),
    }),
  ],
  left: [],
  right: [],
}
