import { ReactNode } from "react";

import DocsSidebar from "@/components/shared/docs-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/docs";
import ThemeSwitcher from "@/components/shared/theme-switcher";
import DocsHeader from "@/components/shared/doc-header";

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex-1 items-start md:grid md:grid-cols-[300px_minmax(0,1fr)]  lg:grid-cols-[350px_minmax(0,1fr)]">
      <aside className="fixed top-0  z-30 hidden w-full shrink-0 md:sticky md:block h-screen  border-r">
        <ScrollArea className="h-screen p-5 bg-muted/20">
          <DocsSidebar items={docsConfig.sidebarNav} />
        </ScrollArea>
        <ThemeSwitcher />
      </aside>
      <div>
        <DocsHeader />
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default DocsLayout;
