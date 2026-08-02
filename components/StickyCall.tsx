export default function StickyCall({ phone }: { phone: string }) {
  const tel = "tel:+1" + phone.replace(/\D/g, "");
  return (
    <a
      href={tel}
      aria-label={`Call 1031 Exchange Jacksonville at ${phone}`}
      data-mobile-call="true"
      className="fixed bottom-[max(18px,env(safe-area-inset-bottom))] right-[18px] z-50 hidden h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#c9a962] bg-[#1a1a1a] text-[#f5f1eb] shadow-xl active:scale-95 max-md:flex"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[25px] w-[25px] fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />
      </svg>
    </a>
  );
}
