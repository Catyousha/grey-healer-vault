export default function Navbar() {
  return (
    <nav className="navbar sticky top-0 bg-white z-50 h-[5vh]">
      <div className="flex-1">
        <a className="text-xl font-bold font-mono">GreyHealerVault</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className='active'>Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
