// Définition du thème par défaut
const defaultTheme = {
  // Polices temporaires
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Couleurs pour la mise en page
  colors: {
    primary1: "#854CE6",
    background1: "#222A35",
    button: "#854CE6",
    background2: "#19212C",
    text: "#C8CFD8",
    text1: "#F2F5F7",
    text2: "#626970",
    text3: "#575C66",
    footerBackground: "#00012B"
  },
  // Points de rupture pour le design réactif
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
};

// Exportation du thème par défaut
export default defaultTheme;
