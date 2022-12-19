export default function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className="bg-amber-500 rounded-full w-12 h-12 fixed right-10 bottom-10 hover:text-white"
    >
      <i className="fa-solid fa-angle-up"></i>
    </button>
  );
}
