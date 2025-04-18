import { motion } from 'framer-motion';

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-aegean-900">
      {/* Volcanic Rocks */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,400 L0,200 Q360,280 720,200 T1440,200 L1440,400 Z"
          fill="#1a1a1a"
          className="translate-y-2"
        />
        <path
          d="M0,400 L0,250 Q360,330 720,250 T1440,250 L1440,400 Z"
          fill="#2a2a2a"
        />
      </svg>

      {/* Animated Waves */}
      <div className="absolute inset-0">
        <motion.svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          {/* First Wave Layer */}
          <motion.path
            d="M0,400 L0,300 Q360,200 720,300 T1440,300 L1440,400 Z"
            fill="#0ea5e9"
            fillOpacity="0.3"
            animate={{
              d: [
                "M0,400 L0,300 Q360,200 720,300 T1440,300 L1440,400 Z",
                "M0,400 L0,300 Q360,400 720,300 T1440,300 L1440,400 Z",
                "M0,400 L0,300 Q360,200 720,300 T1440,300 L1440,400 Z"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Second Wave Layer */}
          <motion.path
            d="M0,400 L0,320 Q360,220 720,320 T1440,320 L1440,400 Z"
            fill="#0284c7"
            fillOpacity="0.4"
            animate={{
              d: [
                "M0,400 L0,320 Q360,220 720,320 T1440,320 L1440,400 Z",
                "M0,400 L0,320 Q360,420 720,320 T1440,320 L1440,400 Z",
                "M0,400 L0,320 Q360,220 720,320 T1440,320 L1440,400 Z"
              ]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Third Wave Layer */}
          <motion.path
            d="M0,400 L0,340 Q360,240 720,340 T1440,340 L1440,400 Z"
            fill="#075985"
            fillOpacity="0.5"
            animate={{
              d: [
                "M0,400 L0,340 Q360,240 720,340 T1440,340 L1440,400 Z",
                "M0,400 L0,340 Q360,440 720,340 T1440,340 L1440,400 Z",
                "M0,400 L0,340 Q360,240 720,340 T1440,340 L1440,400 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />

          {/* Foam Layer */}
          <motion.path
            d="M0,400 L0,360 Q360,330 720,360 T1440,360 L1440,400 Z"
            fill="rgba(255, 255, 255, 0.3)"
            animate={{
              d: [
                "M0,400 L0,360 Q360,330 720,360 T1440,360 L1440,400 Z",
                "M0,400 L0,360 Q360,390 720,360 T1440,360 L1440,400 Z",
                "M0,400 L0,360 Q360,330 720,360 T1440,360 L1440,400 Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
        </motion.svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aegean-900/30 to-aegean-900/70" />
    </div>
  );
}