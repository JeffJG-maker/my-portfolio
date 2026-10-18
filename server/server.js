import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10kb" }));

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running successfully.",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields correctly.",
      });
    }

    if (!process.env.RESEND_API_KEY || !process.env.GMAIL_USER) {
      console.error("Missing email environment variables.");

      return res.status(500).json({
        success: false,
        message: "The email service is not configured yet.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.GMAIL_USER],
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${subject.trim()}`,
      text: `Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}`,
    });

    if (error) {
      console.error("Resend API error:", error);

      return res.status(502).json({
        success: false,
        message: "The email service could not send your message. Please try again.",
      });
    }

    console.log("Contact email accepted by Resend:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact endpoint error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again.",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});