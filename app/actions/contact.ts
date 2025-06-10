"use server"

import { z } from "zod"

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the message in a database
    // 3. Send to a webhook or API endpoint

    // For demo purposes, we'll simulate different scenarios
    const random = Math.random()

    if (random < 0.1) {
      // Simulate network error (10% chance)
      throw new Error("Network error: Unable to send message. Please try again.")
    }

    if (random < 0.2) {
      // Simulate server error (10% chance)
      throw new Error("Server error: Something went wrong on our end. Please try again later.")
    }

    // Simulate successful email sending
    console.log("Contact form submission:", validatedData)

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation errors
      return {
        success: false,
        message: "Please check your input and try again.",
        errors: error.errors.reduce(
          (acc, err) => {
            acc[err.path[0] as string] = err.message
            return acc
          },
          {} as Record<string, string>,
        ),
      }
    }

    // Other errors (network, server, etc.)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
    }
  }
}
