import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
function App() {
  const height = useMotionValue(80);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - scrollY.getPrevious()!;
    const newHeight = height.get() - diff;
    if (diff > 0) {
      height.set(Math.max(50, newHeight));
    } else if (diff < 0) {
      height.set(Math.min(80, newHeight));
    }

    console.log("hi", diff);
  });

  const newHeight = useSpring(height, { bounce: 0 });
  return (
    <>
      <div className="max-w-[900px] px-4 mx-auto">
        <motion.header
          className="flex items-center justify-between p-4 sticky top-0 left-0 text-white bg-neutral-400"
          style={{ height: newHeight }}
        >
          <div className="text-2xl font-bold uppercase">navbar</div>
          <nav className="flex items-center gap-4">
            <a href="#" className="font-semibold">
              link1
            </a>
            <a href="#" className="font-semibold">
              link2
            </a>
            <a href="#" className="font-semibold">
              link3
            </a>
            <a href="#" className="font-semibold">
              link4
            </a>
          </nav>
        </motion.header>
        <main className="min-h-[300vh] bg-neutral-100"></main>
      </div>
    </>
  );
}

export default App;
