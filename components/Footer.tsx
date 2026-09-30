export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-7">
      <div className="container-x flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} PT. Mitra Utama Cemerlang. All rights reserved.</p>
        <p>Jakarta · Kalimantan</p>
      </div>
    </footer>
  );
}
