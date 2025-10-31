const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Dummy chart data
const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue ($)",
      data: [12000, 19000, 3000, 5000, 20000, 30000],
      borderColor: "#3b82f6",
      backgroundColor: "#60a5fa",
    },
  ],
};

const productSales = {
  labels: ["Product A", "Product B", "Product C"],
  datasets: [
    {
      label: "Sales",
      data: [300, 500, 200],
      backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
    },
  ],
};

const channelData = {
  labels: ["Online", "In-Store", "Wholesale"],
  datasets: [
    {
      data: [60, 25, 15],
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
    },
  ],
};

// Routes
app.get("/", (req, res) => res.send("✅ Admin Dashboard Backend Running!"));
app.get("/api/revenue", (req, res) => res.json(revenueData));
app.get("/api/sales", (req, res) => res.json(productSales));
app.get("/api/channels", (req, res) => res.json(channelData));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
