import { useEffect, useRef } from "react";

const Robot = () => {
  const pupilLeftRef = useRef(null);
  const pupilRightRef = useRef(null);
  const eyeLeftRef = useRef(null);
  const eyeRightRef = useRef(null);

  const MAX_DIST = 11;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = [
        { pupil: pupilLeftRef.current, socket: eyeLeftRef.current },
        { pupil: pupilRightRef.current, socket: eyeRightRef.current },
      ];

      eyes.forEach(({ pupil, socket }) => {
        if (!pupil || !socket) return;
        const rect = socket.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(Math.hypot(dx, dy), MAX_DIST);
        pupil.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const Eye = ({ socketRef, pupilRef }) => (
    <div
      ref={socketRef}
      style={{
        width: 48, height: 48,
        background: "#2C2C2A",
        borderRadius: "50%",
        border: "3px solid #5F5E5A",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}
    >
      <div
        ref={pupilRef}
        style={{
          width: 18, height: 18,
          background: "#1D9E75",
          borderRadius: "50%",
          border: "2px solid #085041",
          position: "absolute",
          transition: "transform 0.05s linear",
          boxShadow: "0 0 4px #5DCAA5",
        }}
      >
        <div style={{
          width: 5, height: 5,
          background: "white",
          borderRadius: "50%",
          position: "absolute",
          top: 3, left: 9,
        }} />
      </div>
    </div>
  );

  const bodyStyle = {
    background: "#b4b2a9",
    border: "3px solid #888780",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* Head */}
      <div style={{
        ...bodyStyle,
        width: 160, height: 140,
        borderRadius: 24,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 16, position: "relative",
      }}>

        {/* Antenna */}
        <div style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 14, height: 14, background: "#E24B4A", borderRadius: "50%", border: "2px solid #A32D2D", animation: "blink 1.5s infinite" }} />
          <div style={{ width: 4, height: 22, background: "#888780", borderRadius: 2 }} />
        </div>

        {/* Ears */}
        {["left", "right"].map((side) => (
          <div key={side} style={{
            position: "absolute", top: 35,
            [side]: -17,
            width: 14, height: 40,
            background: "#888780",
            borderRadius: 4,
            border: "2px solid #5F5E5A",
          }}>
            {[0, 1].map((i) => (
              <div key={i} style={{ width: 8, height: 8, background: "#D3D1C7", borderRadius: "50%", margin: "4px auto" }} />
            ))}
          </div>
        ))}

        {/* Eyes */}
        <div style={{ display: "flex", gap: 20 }}>
          <Eye socketRef={eyeLeftRef} pupilRef={pupilLeftRef} />
          <Eye socketRef={eyeRightRef} pupilRef={pupilRightRef} />
        </div>

        {/* Mouth */}
        <div style={{ display: "flex", gap: 6 }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ width: 10, height: 10, background: "#1D9E75", borderRadius: 2 }} />
          ))}
        </div>
      </div>

      {/* Neck */}
      <div style={{ width: 30, height: 18, background: "#888780", border: "2px solid #5F5E5A", borderTop: "none", borderRadius: "0 0 4px 4px" }} />

      {/* Body + Arms */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Left Arm */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ ...bodyStyle, width: 22, height: 80, borderRadius: 10 }} />
          <div style={{ width: 28, height: 22, background: "#888780", borderRadius: 8, border: "2px solid #5F5E5A", marginTop: -4 }} />
        </div>

        {/* Body */}
        <div style={{ ...bodyStyle, width: 180, height: 120, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            width: 100, height: 60,
            background: "#2C2C2A",
            borderRadius: 8, border: "2px solid #5F5E5A",
            display: "grid", gridTemplateColumns: "repeat(3,1fr)",
            gridTemplateRows: "repeat(2,1fr)", gap: 6, padding: 8,
          }}>
            {["#E24B4A","#EF9F27","#1D9E75","#378ADD","#7F77DD","#D4537E"].map((color, i) => (
              <div key={i} style={{ background: color, borderRadius: "50%", animation: `blink ${1.5 + i * 0.2}s infinite` }} />
            ))}
          </div>
        </div>

        {/* Right Arm */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ ...bodyStyle, width: 22, height: 80, borderRadius: 10 }} />
          <div style={{ width: 28, height: 22, background: "#888780", borderRadius: 8, border: "2px solid #5F5E5A", marginTop: -4 }} />
        </div>
      </div>

      {/* Legs */}
      <div style={{ display: "flex", gap: 30 }}>
        {[0, 1].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ ...bodyStyle, width: 28, height: 60, borderRadius: 8 }} />
            <div style={{ width: 38, height: 16, background: "#888780", borderRadius: 6, border: "2px solid #5F5E5A", marginTop: -4 }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </div>
  );
};

export default Robot;