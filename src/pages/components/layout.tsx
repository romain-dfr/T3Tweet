import type { PropsWithChildren } from "react";

const LayoutPage = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="h-full w-full overflow-auto border-x border-slate-400 md:max-w-2xl">
        {props.children}
      </div>
    </main>
  );
};

export default LayoutPage;
