import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[var(--foreground)]/10">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="/logo.png"
          alt="Logo SPOT"
          width={80}
          height={80}
          className="mx-auto mb-6 opacity-80"
        />
        <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-2 glow">
          🌟 Merci !
        </h3>
        <p className="text-[var(--foreground)]/70 text-lg">
          <strong>SPOT</strong> — La réalité d&apos;hier dans le monde d&apos;aujourd&apos;hui
        </p>
        <p className="mt-8 text-sm text-[var(--foreground)]/40">
          © 2025 Équipe SPOT — Projet étudiant
        </p>
      </div>
    </footer>
  );
}

