import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props : LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900" rel="stylesheet" />
      </Head>
      <div>{children}</div>
    </div>
  )
}
