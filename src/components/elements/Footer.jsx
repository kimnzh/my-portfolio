export default function Footer() {
  return (
    <footer className="py-4 font-poppins">
      <div className="text-center max-w-screen-lg mx-auto">
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()} Muhamad Hakim Nizami. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
