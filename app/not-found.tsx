import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <Container width="reading" className="py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">That address is not part of this site.</p>
      <p className="mt-6">
        <Link href="/" className="font-semibold text-accent">
          Back to the homepage
        </Link>
      </p>
    </Container>
  );
}
