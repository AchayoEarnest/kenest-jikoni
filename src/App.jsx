import React, { useState, useEffect } from "react";

export default function KenestJikoni() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to open Google Maps
  const handleGetDirections = () => {
    const latitude = -1.2864;
    const longitude = 36.8172;
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(mapsUrl, "_blank");
  };

  // Function to call directly
  const handleCallUs = () => {
    window.location.href = "tel:+254712345678";
  };

  const colors = {
    primary: "#FF8C42",
    primaryDark: "#E67E2F",
    secondary: "#FDB813",
    dark: "#1a1a1a",
    darkGray: "#2c2c2c",
    gray: "#666666",
    lightGray: "#f5f5f5",
    light: "#fef9f3",
    white: "#ffffff",
  };

  const commonStyles = {
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    gradient: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
    shadowSmall: "0 4px 15px rgba(0, 0, 0, 0.08)",
    shadowMedium: "0 10px 30px rgba(255, 140, 66, 0.15)",
    shadowLarge: "0 20px 50px rgba(0, 0, 0, 0.12)",
  };

  return (
    <div
      style={{
        backgroundColor: colors.light,
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          h1 { font-size: 2rem !important; }
          h2 { font-size: 1.8rem !important; }
          p { font-size: 0.95rem !important; }
        }

        button:hover {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* ============ MODERN NAVIGATION ============ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
          boxShadow: scrollY > 50 ? commonStyles.shadowMedium : "none",
          zIndex: 50,
          padding: "1rem 0",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            ...commonStyles.container,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onClick={() => scrollToSection("home")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                fontSize: "2rem",
                background: commonStyles.gradient,
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              🍲
            </div>
            <div>
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "800",
                  background: commonStyles.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Comfortaa', cursive",
                }}
              >
                Kenest Jikoni
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: colors.gray,
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                FRESH • AFFORDABLE • LOCAL
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          {!isMobile && (
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Menu", id: "menu" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: colors.gray,
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    padding: "0.5rem 1rem",
                    position: "relative",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = colors.primary)}
                  onMouseLeave={(e) => (e.target.style.color = colors.gray)}
                >
                  {item.label}
                </button>
              ))}
              <button
                style={{
                  background: commonStyles.gradient,
                  color: colors.white,
                  padding: "0.75rem 1.8rem",
                  borderRadius: "50px",
                  border: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease",
                  boxShadow: commonStyles.shadowSmall,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onClick={() => scrollToSection("contact")}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = commonStyles.shadowMedium;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = commonStyles.shadowSmall;
                }}
              >
                Visit Now →
              </button>
            </div>
          )}

          {/* Mobile Menu Button - Only on Mobile */}
          {isMobile && (
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: colors.dark,
                padding: "0.5rem",
                fontSize: "1.5rem",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Mobile Menu - Only Visible on Mobile When Open */}
        {isMobile && mobileMenuOpen && (
          <div
            style={{
              background: colors.white,
              borderTop: `1px solid ${colors.lightGray}`,
              padding: "1rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Menu", id: "menu" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: colors.dark,
                  cursor: "pointer",
                  fontWeight: "600",
                  padding: "0.75rem",
                  textAlign: "left",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = colors.primary)}
                onMouseLeave={(e) => (e.target.style.color = colors.dark)}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                background: commonStyles.gradient,
                color: colors.white,
                padding: "0.875rem",
                borderRadius: "50px",
                border: "none",
                fontWeight: "700",
                cursor: "pointer",
                marginTop: "0.5rem",
                width: "100%",
              }}
            >
              Visit Now
            </button>
          </div>
        )}
      </nav>

      {/* ============ HERO SECTION ============ */}
      <section
        id="home"
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          background: `linear-gradient(135deg, ${colors.light} 0%, #fff5e6 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "300px",
            height: "300px",
            background: `linear-gradient(135deg, ${colors.secondary}20, ${colors.primary}10)`,
            borderRadius: "50%",
          }}
        ></div>

        <div
          style={{
            ...commonStyles.container,
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "2rem" : "3rem",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div style={{ animation: "fadeInUp 0.8s ease" }}>
              <div
                style={{
                  display: "inline-block",
                  background: `${colors.secondary}20`,
                  color: colors.primary,
                  padding: "0.5rem 1rem",
                  borderRadius: "50px",
                  fontSize: isMobile ? "0.75rem" : "0.85rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                🎉 WELCOME TO KENEST JIKONI
              </div>
              <h1
                style={{
                  fontSize: isMobile ? "2rem" : "3.5rem",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  marginBottom: "1.5rem",
                  color: colors.dark,
                  fontFamily: "'Comfortaa', cursive",
                }}
              >
                Fresh
                <span
                  style={{
                    background: commonStyles.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  Affordable
                </span>{" "}
                Local Meals
              </h1>
              <p
                style={{
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  color: colors.gray,
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  maxWidth: "500px",
                }}
              >
                Authentic Kenyan street food crafted with fresh ingredients,
                served with care, at prices that make sense. Your neighborhood's
                favorite food stop.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  onClick={() => scrollToSection("contact")}
                  style={{
                    background: commonStyles.gradient,
                    color: colors.white,
                    padding: "1rem 2rem",
                    borderRadius: "50px",
                    border: "none",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    transition: "all 0.3s ease",
                    boxShadow: commonStyles.shadowMedium,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-4px)";
                    e.target.style.boxShadow = commonStyles.shadowLarge;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = commonStyles.shadowMedium;
                  }}
                >
                  Order Now →
                </button>
                <button
                  onClick={() => scrollToSection("menu")}
                  style={{
                    background: "none",
                    border: `2px solid ${colors.primary}`,
                    color: colors.primary,
                    padding: "1rem 2rem",
                    borderRadius: "50px",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${colors.primary}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "none";
                  }}
                >
                  View Menu
                </button>
              </div>
            </div>

            {/* Right - Hero Card (Hidden on Mobile) */}
            {!isMobile && (
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "-20px",
                    background: commonStyles.gradient,
                    borderRadius: "30px",
                    transform: "rotate(8deg)",
                    opacity: "0.15",
                  }}
                ></div>
                <div
                  style={{
                    position: "relative",
                    background: colors.white,
                    borderRadius: "30px",
                    padding: "2.5rem",
                    boxShadow: commonStyles.shadowLarge,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "4rem",
                      marginBottom: "1rem",
                      lineHeight: "1",
                    }}
                  >
                    🍽️
                  </div>
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      marginBottom: "1.5rem",
                      color: colors.dark,
                      fontFamily: "'Comfortaa', cursive",
                    }}
                  >
                    Open Now!
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}
                  >
                    {[
                      {
                        icon: "🕐",
                        label: "Hours",
                        value: "6:00 AM – 8:00 PM Daily",
                      },
                      {
                        icon: "📍",
                        label: "Location",
                        value: "Trading Center, Main Road",
                      },
                      {
                        icon: "📱",
                        label: "Call Us",
                        value: "+254 725 486 428",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div style={{ fontSize: "1.5rem" }}>{item.icon}</div>
                        <div>
                          <div
                            style={{
                              fontSize: "0.85rem",
                              color: colors.gray,
                              fontWeight: "600",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {item.label}
                          </div>
                          <div
                            style={{
                              fontSize: "1rem",
                              color: colors.dark,
                              fontWeight: "600",
                            }}
                          >
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============ FEATURES SECTION ============ */}
      <section
        style={{
          padding: isMobile ? "2rem 0" : "4rem 0",
          background: colors.white,
          borderTop: `1px solid ${colors.lightGray}`,
        }}
      >
        <div style={commonStyles.container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "⚡",
                label: "Lightning Fast",
                desc: "Your meal ready in minutes",
              },
              {
                icon: "💚",
                label: "Ultra Fresh",
                desc: "Daily sourced ingredients",
              },
              { icon: "🤝", label: "Family Vibe", desc: "Treated like family" },
              {
                icon: "✨",
                label: "Spotless Clean",
                desc: "Hygiene is non-negotiable",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.5rem",
                  background: colors.lightGray,
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${colors.primary}10`;
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.lightGray;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "2rem" }}>{feature.icon}</div>
                <div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: colors.dark,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {feature.label}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: colors.gray }}>
                    {feature.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section
        id="about"
        style={{ padding: isMobile ? "3rem 1.5rem" : "5rem 1.5rem" }}
      >
        <div style={commonStyles.container}>
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.8rem",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "1rem",
              color: colors.dark,
              fontFamily: "'Comfortaa', cursive",
            }}
          >
            Our{" "}
            <span
              style={{
                background: commonStyles.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Story
            </span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: colors.gray,
              marginBottom: "3rem",
              fontSize: isMobile ? "1rem" : "1.1rem",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Born from passion. Built on trust. Driven by community.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                emoji: "👨‍🍳",
                name: "Kennedy",
                title: "Master Chef",
                desc: "5+ years perfecting street food",
              },
              {
                emoji: "❤️",
                name: "Earnest",
                title: "Co-Founder",
                desc: "Service & hygiene obsessed",
              },
              {
                emoji: "🏪",
                name: "Kenest",
                title: "Our Promise",
                desc: "Fresh. Affordable. Always.",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  background: colors.white,
                  borderRadius: "20px",
                  boxShadow: commonStyles.shadowSmall,
                  transition: "all 0.3s ease",
                  border: `2px solid ${colors.lightGray}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = commonStyles.shadowMedium;
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = commonStyles.shadowSmall;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = colors.lightGray;
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {member.emoji}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    marginBottom: "0.5rem",
                    color: colors.dark,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: colors.primary,
                    fontWeight: "700",
                    marginBottom: "0.75rem",
                  }}
                >
                  {member.title}
                </p>
                <p style={{ color: colors.gray, fontSize: "0.95rem" }}>
                  {member.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: commonStyles.gradient,
              borderRadius: "25px",
              padding: isMobile ? "2rem" : "3rem",
              color: colors.white,
              boxShadow: commonStyles.shadowMedium,
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "1.5rem" : "1.8rem",
                fontWeight: "800",
                marginBottom: "1rem",
                fontFamily: "'Comfortaa', cursive",
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.1rem",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              To serve our community authentic, delicious Kenyan meals made
              fresh daily with the finest ingredients. We believe great food
              shouldn't break the bank.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              {[
                { icon: "🥬", label: "Fresh Daily", value: "Local & Quality" },
                { icon: "🧼", label: "Spotless", value: "Hygiene Sacred" },
                {
                  icon: "💰",
                  label: "Honest Prices",
                  value: "No Hidden Costs",
                },
                { icon: "😊", label: "Community", value: "You Are Family" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    borderLeft: `3px solid rgba(255,255,255,0.3)`,
                    paddingLeft: "1rem",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: "0.9rem", opacity: "0.95" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.85rem", opacity: "0.8" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MENU SECTION ============ */}
      <section
        id="menu"
        style={{
          padding: isMobile ? "3rem 1.5rem" : "5rem 1.5rem",
          background: colors.light,
        }}
      >
        <div style={commonStyles.container}>
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.8rem",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "1rem",
              color: colors.dark,
              fontFamily: "'Comfortaa', cursive",
            }}
          >
            Our{" "}
            <span
              style={{
                background: commonStyles.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Menu
            </span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: colors.gray,
              marginBottom: "3rem",
              fontSize: isMobile ? "1rem" : "1.1rem",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Generous portions. Authentic flavors. Unbeatable prices.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                title: "Breakfast",
                emoji: "🌅",
                items: [
                  { name: "Tea", price: 20 },
                  { name: "Mandazi", price: 10 },
                  { name: "Chapati", price: 20 },
                  { name: "Eggs (2)", price: 30 },
                ],
              },
              {
                title: "Lunch",
                emoji: "🍽️",
                items: [
                  { name: "Beans", price: 50 },
                  { name: "Rice & Beans", price: 100 },
                  { name: "Ugali & Sukuma", price: 80 },
                  { name: "Ugali & Omena", price: 100 },
                ],
              },
              {
                title: "Snacks",
                emoji: "🥟",
                items: [
                  { name: "Smokies", price: 40 },
                  { name: "Chapati (Lunch)", price: 30 },
                ],
              },
            ].map((category, idx) => (
              <div
                key={idx}
                style={{
                  background: colors.white,
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: commonStyles.shadowSmall,
                  transition: "all 0.3s ease",
                  border: `1px solid ${colors.lightGray}`,
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.boxShadow = commonStyles.shadowMedium;
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.borderColor = colors.primary;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.boxShadow = commonStyles.shadowSmall;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = colors.lightGray;
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ fontSize: "2rem" }}>{category.emoji}</div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      color: colors.dark,
                      margin: 0,
                    }}
                  >
                    {category.title}
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "1rem",
                        borderBottom:
                          itemIdx < category.items.length - 1
                            ? `1px solid ${colors.lightGray}`
                            : "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.paddingLeft = "0.5rem";
                        e.currentTarget.style.color = colors.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.paddingLeft = "0";
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <span style={{ fontWeight: "600", color: "inherit" }}>
                        {item.name}
                      </span>
                      <span
                        style={{
                          background: commonStyles.gradient,
                          color: colors.white,
                          padding: "0.5rem 1rem",
                          borderRadius: "50px",
                          fontSize: "0.85rem",
                          fontWeight: "700",
                        }}
                      >
                        KES {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div
            style={{
              background: "linear-gradient(135deg, #fff5e6 0%, #fffaf0 100%)",
              border: `2px dashed ${colors.secondary}`,
              borderRadius: "20px",
              padding: isMobile ? "2rem" : "3rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🍛</div>
            <h3
              style={{
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "800",
                color: colors.dark,
                marginBottom: "0.5rem",
                fontFamily: "'Comfortaa', cursive",
              }}
            >
              Coming Soon!
            </h3>
            <p
              style={{
                color: colors.gray,
                marginBottom: "0.5rem",
                fontSize: isMobile ? "0.95rem" : "1rem",
              }}
            >
              Chips & Chicken combos – Your favorite pairing is on the way
            </p>
            <p
              style={{
                fontSize: isMobile ? "0.85rem" : "0.9rem",
                color: colors.gray,
              }}
            >
              Plus: Expanded seating & neighborhood delivery
            </p>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section
        style={{
          padding: isMobile ? "3rem 1.5rem" : "5rem 1.5rem",
          background: colors.white,
        }}
      >
        <div style={commonStyles.container}>
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.8rem",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "1rem",
              color: colors.dark,
              fontFamily: "'Comfortaa', cursive",
            }}
          >
            What People{" "}
            <span
              style={{
                background: commonStyles.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Love
            </span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: colors.gray,
              marginBottom: "3rem",
              fontSize: isMobile ? "1rem" : "1.1rem",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Real voices. Real love. Real food.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                name: "John M.",
                role: "Bodaboda Rider",
                text: "Best chapati in town! I pass by every morning. Massive portions, right price!",
                rating: 5,
              },
              {
                name: "Grace K.",
                role: "Student",
                text: "My favorite lunch spot. Affordable, filling, and the staff treats you like family.",
                rating: 5,
              },
              {
                name: "Peter W.",
                role: "Construction Worker",
                text: "Fresh, clean, and delicious. Been coming for months. This place hits different!",
                rating: 5,
              },
              {
                name: "Martha J.",
                role: "Shop Attendant",
                text: "Best service around! Hot food, fresh quality, and unbeatable speed. My go-to!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                style={{
                  background: colors.lightGray,
                  borderLeft: `5px solid ${colors.primary}`,
                  padding: "2rem",
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.boxShadow = commonStyles.shadowMedium;
                    e.currentTarget.style.transform = "translateY(-8px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    marginBottom: "1rem",
                  }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ fontSize: "1rem" }}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    color: colors.dark,
                    marginBottom: "1.5rem",
                    lineHeight: "1.7",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.text}"
                </p>
                <div>
                  <p
                    style={{
                      fontWeight: "800",
                      color: colors.dark,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: colors.gray,
                      fontWeight: "600",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section
        id="contact"
        style={{
          padding: isMobile ? "3rem 1.5rem" : "5rem 1.5rem",
          background: colors.light,
        }}
      >
        <div style={commonStyles.container}>
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.8rem",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "1rem",
              color: colors.dark,
              fontFamily: "'Comfortaa', cursive",
            }}
          >
            Find{" "}
            <span
              style={{
                background: commonStyles.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Us
            </span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: colors.gray,
              marginBottom: "3rem",
              fontSize: isMobile ? "1rem" : "1.1rem",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Located at your neighborhood's heart. Easy to find, impossible to
            forget.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "2rem",
            }}
          >
            {/* Contact Info */}
            <div
              style={{
                background: colors.white,
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: commonStyles.shadowSmall,
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  marginBottom: "2rem",
                  color: colors.dark,
                }}
              >
                Get In Touch
              </h3>
              {[
                {
                  icon: "📍",
                  label: "Location",
                  value: "Trading Center\nNear Bodaboda Stage",
                },
                {
                  icon: "📱",
                  label: "Phone",
                  value: "+254 725 486 428",
                  action: handleCallUs,
                },
                {
                  icon: "🕐",
                  label: "Hours",
                  value: "6:00 AM – 8:00 PM\nDaily",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginBottom: idx < 2 ? "2rem" : "0",
                    cursor: item.action ? "pointer" : "default",
                  }}
                  onClick={item.action}
                >
                  <div style={{ fontSize: "1.8rem" }}>{item.icon}</div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: colors.gray,
                        fontWeight: "700",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: colors.dark,
                        fontWeight: "600",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder with Get Directions Button */}
            <div
              style={{
                background: commonStyles.gradient,
                borderRadius: "20px",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: colors.white,
                textAlign: "center",
                boxShadow: commonStyles.shadowMedium,
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "800",
                  marginBottom: "0.5rem",
                }}
              >
                Trading Center
              </h3>
              <p style={{ marginBottom: "1.5rem", opacity: "0.95" }}>
                Near Bodaboda Stage
              </p>
              <button
                onClick={handleGetDirections}
                style={{
                  background: colors.white,
                  color: colors.primary,
                  padding: "0.75rem 1.5rem",
                  borderRadius: "50px",
                  border: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = commonStyles.shadowMedium;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                📍 Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section
        style={{
          padding: isMobile ? "3rem 1.5rem" : "4rem 1.5rem",
          background: commonStyles.gradient,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "-50px",
            width: "200px",
            height: "200px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            right: "-50px",
            width: "300px",
            height: "300px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
          }}
        ></div>

        <div
          style={{
            ...commonStyles.container,
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "900",
              color: colors.white,
              marginBottom: "1rem",
              fontFamily: "'Comfortaa', cursive",
            }}
          >
            Your Next Meal Awaits 🍽️
          </h2>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "rgba(255,255,255,0.95)",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
              lineHeight: "1.7",
            }}
          >
            Fresh ingredients, genuine service, honest prices. One visit and
            you'll understand why everyone loves Kenest Jikoni.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              background: colors.white,
              color: colors.primary,
              padding: isMobile ? "0.875rem 2rem" : "1rem 2.5rem",
              borderRadius: "50px",
              border: "none",
              fontWeight: "800",
              fontSize: isMobile ? "1rem" : "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: commonStyles.shadowMedium,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-4px)";
              e.target.style.boxShadow = commonStyles.shadowLarge;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = commonStyles.shadowMedium;
            }}
          >
            Visit Us Today →
          </button>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer
        style={{
          background: colors.dark,
          color: colors.white,
          padding: isMobile ? "2rem 1.5rem" : "3rem 1.5rem",
          borderTop: `1px solid ${colors.darkGray}`,
        }}
      >
        <div style={commonStyles.container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h4
                style={{
                  fontWeight: "900",
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                  fontFamily: "'Comfortaa', cursive",
                }}
              >
                Kenest Jikoni
              </h4>
              <p
                style={{
                  color: "#999",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                Your neighborhood's favorite food stop. Fresh, affordable,
                authentic Kenyan meals.
              </p>
            </div>
            <div>
              <h4
                style={{
                  fontWeight: "900",
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                Quick Links
              </h4>
              {["Home", "About", "Menu", "Contact"].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#999",
                    cursor: "pointer",
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = colors.primary)}
                  onMouseLeave={(e) => (e.target.style.color = "#999")}
                >
                  {link}
                </button>
              ))}
            </div>
            <div>
              <h4
                style={{
                  fontWeight: "900",
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                Hours
              </h4>
              <p style={{ color: "#999", fontSize: "0.95rem" }}>
                Mon - Sun
                <br />
                6:00 AM – 8:00 PM
              </p>
            </div>
            <div>
              <h4
                style={{
                  fontWeight: "900",
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                Contact
              </h4>
              <p
                style={{
                  color: "#999",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                }}
                onClick={handleCallUs}
              >
                📱 +254 725 486 428
                <br />
              </p>
              <p style={{ color: "#999", fontSize: "0.95rem" }}>
                📍 Trading Center
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: `1px solid ${colors.darkGray}`,
              paddingTop: "2rem",
              textAlign: "center",
              color: "#666",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
            }}
          >
            <p>© 2024 Kenest Jikoni. Crafted with ❤️ by Kennedy & Earnest</p>
            <p style={{ marginTop: "0.5rem" }}>
              Serving our community with fresh food and honest prices
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
