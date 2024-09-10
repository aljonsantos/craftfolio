const Header = () => {
  return (
    <div className="header flex justify-between items-center bg-white px-5 py-4 border-solid border-b border-zinc-300 rounded-b-2xl shadow-2xl z-10 lg:border-none lg:shadow-none">
      <div>
        <h1 className="text-2xl font-bold">Preview</h1>
        <p className="text-xs">me.com</p>
      </div>
      <a href="/preview" target="_blank" className="text-zinc-500 border-solid border border-zinc-300 p-2 rounded-2xl hover:bg-zinc-200 hover:text-zinc-700 hover:border-zinc-400 transition-all">
        <svg className="w-5 h-5" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
        </svg>
      </a>
    </div>
  );
};
export default Header;
