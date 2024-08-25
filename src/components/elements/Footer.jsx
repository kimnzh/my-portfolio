export default function Footer() {
  return (
    <footer className="pb-6 pt-4">
      <div className="mx-auto mt-2 max-w-screen-lg text-center text-[0.6rem] opacity-70 transition duration-300 dark:text-white sm:text-sm lg:text-base">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">Muhamad Hakim Nizami</span>. All rights
          reserved.
        </p>
        <p>Last Updated: 22/08/2024</p>
      </div>
    </footer>
  );
}
