import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-5xl">
      <Container>
        <div className="max-w-[480px] mx-auto text-center">
          <h1 className="font-heading text-[48px] font-semibold text-text-primary mb-xl">
            404
          </h1>
          <p className="text-lg text-text-secondary mb-2xl leading-relaxed">
            This page doesn&apos;t exist. But our jewelry does. Let&apos;s get
            you back on track.
          </p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
