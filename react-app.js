// Simple React component mounted on #react-root

const { useState, useEffect } = React;

function DailySpecialBanner() {
  const [highlight, setHighlight] = useState("Caffe Americano");

  useEffect(() => {
    const specials = [
      "Caffe Americano",
      "Cold White Brew",
      "Froccino Caramelo",
      "Matcha Green Tea Latte",
      "Blueberry Cheesecake",
    ];

    let index = 0;
    const id = setInterval(() => {
      index = (index + 1) % specials.length;
      setHighlight(specials[index]);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return React.createElement(
    "section",
    {
      style: {
        maxWidth: "960px",
        margin: "32px auto 0",
        padding: "16px 20px",
        borderRadius: "12px",
        background:
          "linear-gradient(135deg, rgba(160,133,107,0.12), rgba(93,64,55,0.08))",
        border: "1px solid rgba(160,133,107,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        fontFamily: "'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      },
    },
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        {
          style: {
            margin: 0,
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8b5e3c",
            fontWeight: 600,
          },
        },
        "Now brewing with React"
      ),
      React.createElement(
        "h3",
        {
          style: {
            margin: "4px 0 0",
            fontSize: "20px",
            color: "#3e2723",
          },
        },
        "Today's rotating special:"
      ),
      React.createElement(
        "p",
        {
          style: {
            margin: "4px 0 0",
            fontSize: "16px",
            fontWeight: 600,
            color: "#5d4037",
          },
        },
        highlight
      )
    ),
    React.createElement(
      "button",
      {
        style: {
          padding: "10px 18px",
          borderRadius: "999px",
          border: "none",
          backgroundColor: "#5d4037",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 500,
          cursor: "pointer",
          boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
        },
        onClick: () => {
          window.scrollTo({
            top: document.getElementById("menu-section").offsetTop - 80,
            behavior: "smooth",
          });
        },
      },
      "Order this special"
    )
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const rootEl = document.getElementById("react-root");
  if (!rootEl || !window.ReactDOM || !window.React) return;

  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(DailySpecialBanner));
});

