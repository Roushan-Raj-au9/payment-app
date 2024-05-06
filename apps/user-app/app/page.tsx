"use client";

import { useBalance } from "@repo/store/useBalance";

export default function Page(): JSX.Element {
  const balance = useBalance();

  return (
    <div className="text-2xl">
      Hi theres {balance}
    </div>
  );
}
