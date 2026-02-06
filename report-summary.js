const opportunityData = [
  { label: "AI Infrastructure (GPU/Cloud)", score: 88 },
  { label: "Managed B2B AI Services", score: 81 },
  { label: "Network-Aware AI Services", score: 73 },
  { label: "Internal AI Productivity", score: 69 }
];

const caseSignals = [
  {
    name: "Singtel + SK Telecom",
    summary: "Operator collaboration around GPU-as-a-service signals fast commercialization of AI capacity.",
    tag: "Infrastructure"
  },
  {
    name: "Telefonica / Orange / Telenor + Nvidia",
    summary: "Partnership model emphasizes scale-up speed and modernized AI-ready cloud operations.",
    tag: "Infrastructure"
  },
  {
    name: "Deutsche Telekom (T-Systems)",
    summary: "AI foundation services and sovereign-cloud positioning reinforce enterprise trust proposition.",
    tag: "Enterprise Services"
  },
  {
    name: "Orange Cyberdefense",
    summary: "AI-driven security operations show high-value service bundling beyond pure connectivity.",
    tag: "AI Security"
  },
  {
    name: "Vodafone + Google Cloud",
    summary: "AI-assisted network lifecycle improvements point to monetizable operational intelligence offerings.",
    tag: "Network Intelligence"
  },
  {
    name: "AT&T Internal AI Programs",
    summary: "Large-scale internal AI usage supports cost efficiency and faster customer operations.",
    tag: "Internal Productivity"
  }
];

function renderOpportunityChart() {
  const canvas = document.getElementById("opportunityChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth;
  const cssHeight = 320;
  canvas.width = cssWidth * dpr;
  canvas.height = cssHeight * dpr;
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, cssWidth, cssHeight);

  const margin = { top: 26, right: 14, bottom: 22, left: 238 };
  const innerW = cssWidth - margin.left - margin.right;
  const rowH = 56;

  ctx.font = "600 13px 'Avenir Next', 'Trebuchet MS', sans-serif";
  ctx.textBaseline = "middle";

  opportunityData.forEach((row, i) => {
    const y = margin.top + i * rowH;
    const w = (row.score / 100) * innerW;

    ctx.fillStyle = "#e5edf6";
    ctx.fillRect(margin.left, y, innerW, 26);

    const gradient = ctx.createLinearGradient(margin.left, y, margin.left + w, y);
    gradient.addColorStop(0, "#4a769e");
    gradient.addColorStop(1, "#6d98c0");
    ctx.fillStyle = gradient;
    ctx.fillRect(margin.left, y, w, 26);

    ctx.fillStyle = "#203040";
    ctx.textAlign = "right";
    ctx.fillText(row.label, margin.left - 10, y + 13);

    ctx.textAlign = "left";
    ctx.fillStyle = "#18425f";
    ctx.fillText(`${row.score}`, margin.left + w + 8, y + 13);
  });

  ctx.strokeStyle = "#d6e0ea";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(margin.left, margin.top - 8);
  ctx.lineTo(margin.left, margin.top + opportunityData.length * rowH - 8);
  ctx.stroke();
}

function renderCaseSignals() {
  const grid = document.getElementById("caseGrid");
  if (!grid) return;

  grid.innerHTML = caseSignals.map((item) => `
    <article class="case">
      <h3>${item.name}</h3>
      <p>${item.summary}</p>
      <span class="tag">${item.tag}</span>
    </article>
  `).join("");
}

function init() {
  renderCaseSignals();
  renderOpportunityChart();
}

window.addEventListener("resize", renderOpportunityChart);
document.addEventListener("DOMContentLoaded", init);
