import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsappButton } from "@/components/WhatsappButton";

type ServicePageLayoutProps = {
  children: React.ReactNode;
};

export function ServicePageLayout({ children }: ServicePageLayoutProps) {
  return (
    <>
      <Header />
      <main className="overflow-x-clip bg-white">{children}</main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
