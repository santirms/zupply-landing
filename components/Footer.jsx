export default function Footer() {
  return (
    <footer className="bg-[#080D1A] border-t border-white/5 py-12 px-6">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <span className="bg-zupply-primary text-zupply-dark font-black text-xl w-[30px] h-[30px] flex items-center justify-center rounded-md font-nunito">
            Z
          </span>
          <span className="text-gray-500 font-semibold text-lg font-nunito">
            zupply
          </span>
        </div>
        <p className="text-gray-500 text-[13px] font-nunito">
          © 2026 Zupply. Software para operadores logísticos de última milla.
        </p>
      </div>
    </footer>
  );
}
