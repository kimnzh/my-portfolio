export default function Footer() {
  return (
    <footer className="pt-4 pb-6">
      <div className="text-center max-w-screen-lg mx-auto text-[0.6rem] sm:text-sm lg:text-base mt-2 opacity-70">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">Muhamad Hakim Nizami</span>. All rights
          reserved.
        </p>
        <p>Last Updated: 18/08/2024</p>
      </div>
    </footer>
  );
}
