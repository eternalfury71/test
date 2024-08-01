import { animated, useSpring } from "@react-spring/web";
function App() {
  const [springs, api] = useSpring(() => ({ from: { x: 0 } }));
  const handleClick = () => {
    api.start({
      from: { x: 0 },
      to: { x: 300 },
    });
  };
  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: "red",
        borderRadius: 8,
        ...springs,
      }}
    />
  );
}

export default App;
