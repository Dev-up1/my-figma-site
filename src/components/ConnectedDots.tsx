export function ConnectedDots({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.1 }}
    >
      <defs>
        <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3DBEAE', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4B3F99', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Dots */}
      <circle cx="10%" cy="15%" r="4" fill="url(#dotGradient)" />
      <circle cx="25%" cy="8%" r="3" fill="url(#dotGradient)" />
      <circle cx="15%" cy="25%" r="3.5" fill="url(#dotGradient)" />
      <circle cx="5%" cy="35%" r="3" fill="url(#dotGradient)" />
      <circle cx="20%" cy="45%" r="4" fill="url(#dotGradient)" />
      <circle cx="8%" cy="55%" r="3" fill="url(#dotGradient)" />
      <circle cx="18%" cy="68%" r="3.5" fill="url(#dotGradient)" />
      <circle cx="12%" cy="80%" r="3" fill="url(#dotGradient)" />
      <circle cx="7%" cy="92%" r="4" fill="url(#dotGradient)" />
      
      <circle cx="90%" cy="12%" r="4" fill="url(#dotGradient)" />
      <circle cx="95%" cy="25%" r="3" fill="url(#dotGradient)" />
      <circle cx="85%" cy="18%" r="3.5" fill="url(#dotGradient)" />
      <circle cx="92%" cy="38%" r="3" fill="url(#dotGradient)" />
      <circle cx="88%" cy="52%" r="4" fill="url(#dotGradient)" />
      <circle cx="96%" cy="65%" r="3" fill="url(#dotGradient)" />
      <circle cx="82%" cy="75%" r="3.5" fill="url(#dotGradient)" />
      <circle cx="93%" cy="85%" r="3" fill="url(#dotGradient)" />
      <circle cx="89%" cy="95%" r="4" fill="url(#dotGradient)" />
      
      {/* Connecting Lines */}
      <line x1="10%" y1="15%" x2="25%" y2="8%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="25%" y1="8%" x2="15%" y2="25%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="15%" y1="25%" x2="5%" y2="35%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="5%" y1="35%" x2="20%" y2="45%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="20%" y1="45%" x2="8%" y2="55%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="8%" y1="55%" x2="18%" y2="68%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="18%" y1="68%" x2="12%" y2="80%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="12%" y1="80%" x2="7%" y2="92%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="10%" y1="15%" x2="15%" y2="25%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="20%" y1="45%" x2="18%" y2="68%" stroke="url(#dotGradient)" strokeWidth="1" />
      
      <line x1="90%" y1="12%" x2="95%" y2="25%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="95%" y1="25%" x2="85%" y2="18%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="85%" y1="18%" x2="92%" y2="38%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="92%" y1="38%" x2="88%" y2="52%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="88%" y1="52%" x2="96%" y2="65%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="96%" y1="65%" x2="82%" y2="75%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="82%" y1="75%" x2="93%" y2="85%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="93%" y1="85%" x2="89%" y2="95%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="90%" y1="12%" x2="85%" y2="18%" stroke="url(#dotGradient)" strokeWidth="1" />
      <line x1="88%" y1="52%" x2="82%" y2="75%" stroke="url(#dotGradient)" strokeWidth="1" />
    </svg>
  );
}
