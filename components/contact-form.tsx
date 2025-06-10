"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { useToast } from "@/components/ui/toast-provider"
import { cn } from "@/lib/utils"

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { addToast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Clear previous errors
    setErrors({})

    const form = event.currentTarget
    const formDataObj = new FormData(form)

    startTransition(async () => {
      try {
        const result = await submitContactForm(formDataObj)

        if (result.success) {
          // Success - show success toast and reset form
          addToast({
            type: "success",
            title: "Message Sent!",
            description: result.message,
            duration: 6000,
          })

          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
          form.reset()
        } else {
          // Error - show error toast and display field errors
          addToast({
            type: "error",
            title: "Failed to Send Message",
            description: result.message,
            duration: 8000,
          })

          // Set field-specific errors if available
          if (result.errors) {
            setErrors(result.errors)
          }
        }
      } catch (error) {
        // Unexpected error
        addToast({
          type: "error",
          title: "Unexpected Error",
          description: "Something went wrong. Please try again later.",
          duration: 8000,
        })
      }
    })
  }

  return (
    <Card className="p-8 glass-effect hover:shadow-xl transition-all duration-300 rounded-2xl border-slate-200/20 dark:border-slate-700/20">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl flex items-center gap-3 text-slate-900 dark:text-white">
          <div className="p-2 bg-gradient-to-r from-electric-500 to-emerald-500 rounded-lg">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          Send me a message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={cn(
                  "glass-effect border-slate-300/20 dark:border-slate-600/20 rounded-lg transition-colors",
                  errors.name && "border-red-500 focus:border-red-500",
                )}
                disabled={isPending}
                required
              />
              {errors.name && <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={cn(
                  "glass-effect border-slate-300/20 dark:border-slate-600/20 rounded-lg transition-colors",
                  errors.email && "border-red-500 focus:border-red-500",
                )}
                disabled={isPending}
                required
              />
              {errors.email && <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={cn(
                "glass-effect border-slate-300/20 dark:border-slate-600/20 rounded-lg transition-colors",
                errors.subject && "border-red-500 focus:border-red-500",
              )}
              disabled={isPending}
              required
            />
            {errors.subject && <p className="text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
          </div>

          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={cn(
                "glass-effect border-slate-300/20 dark:border-slate-600/20 rounded-lg transition-colors resize-none",
                errors.message && "border-red-500 focus:border-red-500",
              )}
              disabled={isPending}
              required
            />
            {errors.message && <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-electric-600 to-electric-700 hover:from-electric-700 hover:to-electric-800 text-white border-0 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-3" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
